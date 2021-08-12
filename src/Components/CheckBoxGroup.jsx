import React from 'react'
import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'

function CheckBoxGroup(props) {

    let { name, label, options, ...rest } = props

    return (
        <div className="form-control" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {({ field }) => {
                    return options.map((item) => {
                        return (<React.Fragment key={item.name}>
                            <input type="checkbox" id={item.value} {...field} value={item.value} checked={field.value.includes(item.value)} >

                            </input>
                            <label htmlFor={item.value}>{item.key}</label>
                        </React.Fragment>)
                    })
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default CheckBoxGroup

