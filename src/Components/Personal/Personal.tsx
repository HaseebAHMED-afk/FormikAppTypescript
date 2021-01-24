import React,{FC} from 'react'
import * as Yup from 'yup'
import {Formik , Form } from 'formik'
import FormField from '../../utils/FormField'
import Button from '@material-ui/core/Button'
import '../index.css'

interface PersonalFormValues{
    firstName?: string,
    lastName?: string,
    address?: string,
    city?:string,
    province?:string,
    country?: string,
    phone?: string,
}

const personaInitialValues:PersonalFormValues ={
    firstName: '',
    lastName: '',
    address:'',
    city: '',
    province:'',
    country:'',
    phone:''
}

const personalValidationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    address:Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    province: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    phone: Yup.string().required('Required')
})

const personalOnSubmit=(values : PersonalFormValues) : void=>{
    alert('')
}

const Personal:FC<PersonalFormValues> = () => {
    let index=1
    return (
        <div>
            <Formik
                initialValues={personaInitialValues}
                validationSchema={personalValidationSchema}
                onSubmit={personalOnSubmit}
            >
                {
                    ({dirty,isValid}) => (
                        <Form>
                            <FormField 
                                name='firstName'
                                label='First Name'
                                type='text'
                            />
                            <FormField 
                                name='lastName'
                                label='Last Name'
                                type='text'
                            />
                            <FormField 
                                name='address'
                                label='Address'
                                type='text'
                            />
                            <FormField 
                                name='city'
                                label='City'
                                type='text'
                            />
                            <FormField 
                                name='province'
                                label='Province or State'
                                type='text'
                            />
                            <FormField 
                                name='country'
                                label='Country'
                                type='text'
                            />
                            <FormField 
                                name='phone'
                                label='Phone'
                                type='text'
                            />
                            <div className="buttonGroup">
                        <Button disabled={index===0 ? true : false} variant="contained" color="secondary"  >Back</Button>
                        <Button variant="contained" color="primary"  >Next</Button>
                    </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Personal
