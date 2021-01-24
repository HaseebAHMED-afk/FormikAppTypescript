import React, { FC } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormField from "../../Utils/FormField";
import Button from '@material-ui/core/Button'
import './index.css'

interface EmailForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const emailValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const emailValidationSchema = Yup.object({
  firstName: Yup.string()
    .required("Required"),
  lastName: Yup.string()
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
            return (
                <Form>
                    <FormField name="firstName" label="First Name" type="text" />
                    <FormField name="lastName" label="Last Name" type="text" />
                    <FormField name="email" label="Email Address" type="text" />
                    <FormField name="password" label="Password" type="password" />
                    <div className="buttonGroup">
                        <Button variant="contained" color="secondary"  >Back</Button>
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
