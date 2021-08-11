// reduce boiler plate in input field
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const validationSchema = Yup.object({
    name: Yup.string().required('required'),
    email: Yup.string().email('Invalid email format').required('required'),
    channel: Yup.string().required('required'),
    comment: Yup.string().required('required')

})

function Forms2() {
    console.log(validationSchema)

    const initialValues = {
        name: 'ali',
        email: '',
        channel: '',
        comment: '',
        dummy: '',
        phNum: ['']
    }

    const onSubmit = (values, onSubmitProps) => {
        console.log(values)
        console.log(onSubmitProps)
        onSubmitProps.resetForm()
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

    // let formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // })

    console.log(Formik.errors)

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnBlur={false} validationSchema={validationSchema} validateOnChange={false} style={{
            display: 'flex', flexdirection: 'column'
        }}>

            <Form>

                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" ></Field>
                    <ErrorMessage name="name" style={{ color: "red", marginTop: "-20px", marginBottom: "10px" }}></ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" ></Field>
                    <ErrorMessage name="email" style={{ color: "red", marginTop: "-20px", marginBottom: "10px" }} />
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel"></Field>
                    <ErrorMessage name="channel" style={{ color: "red", marginTop: "-20px", marginBottom: "10px" }}></ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="comment">Comment</label>
                    <Field as="textarea" id="comment" name="comment"></Field>
                    <ErrorMessage name="comment" className="error">
                        {(msg) => { return <div style={{ color: 'red' }}>{msg}</div> }}
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="dumy">dummy</label>
                    <Field name="dummy">
                        {
                            (props) => {
                                console.log(props)

                                return <input id="dummy" type="text" />
                            }


                        }
                    </Field>
                </div>

                <div className="form-control">
                    <label>enter phone  nuber</label>
                    <FieldArray name="phNum">
                        {(props) => {
                            console.log(props)
                            const { push, remove, form } = props
                            const { values } = form;
                            const { phNum } = values;
                            console.log(phNum)
                            return (<div>
                                {
                                    phNum.map((item, index) => {
                                        return <div key={index}>
                                            <Field type="number" name={`phNum[${index}]`} />


                                            <button type="button" onClick={() => { push('') }} > + </button>
                                            <button type="button" onClick={() => { remove(index) }} > - </button>
                                        </div>
                                    })
                                }
                            </div>)
                        }}
                    </FieldArray>
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik >
    )
}

export default Forms2
