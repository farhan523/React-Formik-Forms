import React from 'react'
import { Field, ErrorMessage } from 'formik'


function Select(props) {

    let { name, label, options, ...rest } = props


    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field id={name} as="select" name={name} {...rest}>
                {options.map((item) => {
                    return <option key={item.value} value={item.value}>{item.key}</option>
                })}
            </Field>
        </div>
    )
}

export default Select
