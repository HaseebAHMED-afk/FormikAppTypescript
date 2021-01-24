import React from 'react'
import * as Yup from 'yup'
import { Formik , Form } from 'formik'
import Button from '@material-ui/core/Button'
import FormField from '../../utils/FormField'

interface ProfessionalFormProps{
    interest?: string,
    lastCompany?: string,
    jobTitle?: string;
    salary?: string,
    degreeType?: string,
    field?: string,
    yearOfPassing?: string,
    universityName?: string,
    universityLocation?: string
}



const Professional = ({submit,prevValues,setFormValues} : any) => {

    // Just for understanding
    // const initialValues:ProfessionalFormProps ={
    //     interest: '',
    //     lastCompany:'',
    //     jobTitle:'',
    //     salary:'',
    //     degreeType:'',
    //     field:'',
    //     yearOfPassing:'',
    //     universityName:'',
    //     universityLocation:''
    // }
    
    const professionalValidationSchema= Yup.object({
        interest: Yup.string().required('Required'),
        lastCompany: Yup.string().required('Required'),
        jobTitle: Yup.string().required('Required'),
        salary: Yup.string().required('Required'),
        degreeType: Yup.string().required('Required'),
        field: Yup.string().required('Required'),
        yearOfPassing: Yup.string().required('Required'),
        universityName: Yup.string().required('Required'),
        universityLocation: Yup.string().required('Required')
    })
    
    const onSubmit=(values:ProfessionalFormProps) : void=>{
        submit(3)
        setFormValues({...values,...prevValues})
    }

    return (
        <div>
            <Formik
                initialValues={prevValues}
                validationSchema={professionalValidationSchema}
                onSubmit={onSubmit}
            >
                {
                    ({dirty , isValid}) => (
                        <Form>
                            <FormField 
                                name="interest"
                                label="Interest"
                                type="text"
                            />
                            <FormField 
                                name="lastCompany"
                                label="Last Company"
                                type="text"
                            />
                            <FormField 
                                name="jobTitle"
                                label="Job Title"
                                type="text"
                            />
                            <FormField 
                                name="salary"
                                label="Salary in USD"
                                type="text"
                            />
                            <FormField 
                                name="degreeType"
                                label="Degree Type"
                                type="text"
                            />
                            <FormField 
                                name="field"
                                label="Field"
                                type="text"
                            />
                            <FormField 
                                name="yearOfPassing"
                                label="Year Of Passing"
                                type="text"
                            />
                            <FormField 
                                name="universityName"
                                label="University Name"
                                type="text"
                            />
                            <FormField 
                                name="universityLocation"
                                label="University Address"
                                type="text"
                            />
                            <div className="buttonGroup">
                        <Button variant="contained" color="secondary" onClick={() => submit(1)} >Back</Button>
                        <Button variant="contained" color="primary" type='submit' >Next</Button>
                    </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Professional
