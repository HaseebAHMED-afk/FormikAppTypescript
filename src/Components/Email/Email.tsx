import React, { FC } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormField from '../../utils/FormField';
import Button from '@material-ui/core/Button'
import '../index.css'

interface EmailForm {
  userName?: string;
  email?: string;
  password?: string;
}

const emailValues:EmailForm = {
  userName: "",
  email: "",
  password: "",
};

const emailValidationSchema = Yup.object({
  userName: Yup.string()
    .required("Required"),
  email: Yup.string().email().required("Provide a valid Email address"),
  password: Yup.string()
    .required("Required")
    .max(15, "Should not be greated than 15 characters")
    .min(5, "Should not be less than 5 characters"),
});

const emailOnSubmit = (values: EmailForm) : void => {
    alert(JSON.stringify(values))
}

const Email: FC<EmailForm> = () => {
    return(
        <div className="email-from" >
<Formik
    initialValues={emailValues}
    validationSchema={emailValidationSchema}
    onSubmit={emailOnSubmit}
    
>
    {
        ({dirty,isValid}) => {
            let index=0
            return (
                <Form>
                    <FormField name="userName" label="User Name" type="text" />
                    <FormField name="email" label="Email Address" type="text" />
                    <FormField name="password" label="Password" type="password" />
                    <div className="buttonGroup">
                        <Button disabled={index===0 ? true : false} variant="contained" color="secondary"  >Back</Button>
                        <Button variant="contained" color="primary"  >Next</Button>
                    </div>

                </Form>
            )
        }
    }
</Formik>
</div>
    )
};

export default Email;
