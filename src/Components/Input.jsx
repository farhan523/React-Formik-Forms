import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Input(props) {
    let { label, name, ...rest } = props
    console.log(props)
    return (
        <div className="form-control">
            <label htmlFor={name}> {label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input
