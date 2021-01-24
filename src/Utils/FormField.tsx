import React, {FC} from 'react'
import TextField from '@material-ui/core/TextField'
import { ErrorMessage, Field } from 'formik'

interface FromFieldProps{
    name:string,
    label:string,
    type: string,
}

const FormField: FC<FromFieldProps> = ({name,label,type}) => {
    return (
        <div>
            <Field
                id="outlined-full-width"
                name={name}
                as={TextField}
                label={label}
                type={type}
                style={{margin:8 , width:'80%' }}
                variant="outlined"
                margin="normal"
                required
                helperText={<ErrorMessage name={name} />}
            />
        </div>
    )
}

export default FormField
