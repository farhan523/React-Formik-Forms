import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object({
    name: Yup.string().required('required'),
    email: Yup.string().email('Invalid email format').required('required'),
    channel: Yup.string().required('required'),
})

function Forms() {
    console.log(validationSchema)

    const initialValues = {
        name: 'ali',
        email: '',
        channel: ''
    }

    const onSubmit = (values) => {
        console.log(values)
    }

    const validate = (values) => {
        let errors = {}

        if (!values.name) {
            errors.name = "Required"
        }
        if (!values.email) {
            errors.email = "Required"
        } else if (!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(values.email)) {
            errors.email = "Invalied email format"
        }
        if (!values.channel) {
            errors.channel = "Required"
        }

        return errors
    }

    let formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log(formik.errors)

    return (
        <div style={{
            display: 'flex', flexdirection: 'column'
        }}>
            <form onSubmit={formik.handleSubmit}>

                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
                    {formik.touched.name && formik.errors.name ? <div style={{ color: "red", marginTop: "-20px", marginBottom: "10px" }}>{formik.errors.name} </div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} ></input>
                    {formik.touched.email && formik.errors.email ? <div style={{ color: "red", marginTop: "-20px", marginBottom: "10px" }}>{formik.errors.email} </div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}></input>
                    {formik.touched.channel && formik.errors.channel ? <div style={{ color: "red", marginTop: "-20px", marginBottom: "10px" }}>{formik.errors.channel} </div> : null}
                </div>


                <button type="submit">Submit</button>
            </form>
        </div >
    )
}

export default Forms
