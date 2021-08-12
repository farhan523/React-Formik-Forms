import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';

let options = [{ key: 'Select an option', value: '' }, { key: 'option 1', value: 'option 1' }]
let options2 = [{ key: 'option2', value: '2' }, { key: 'option 1', value: '1' }]
let checkBoxoptions = [{ key: 'option2', value: '2' }, { key: 'option 1', value: '1' }]

function FormikContainer() {

    const initialValues = { email: "", description: "", selectnumber: '', checknumber: '', options2: '', checkBoxoptions: [] }

    const validationSchema = Yup.object({
        email: Yup.string().email('invalid format').required('required'),
        description: Yup.string().required('required')
    });

    const onSubmit = (values) => { console.log('form values', values) }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(formic) => {
                return (<Form>
                    <FormikControl control='input' type='email' label='Email' name='email' />

                    <FormikControl control='input' type='email' label='Email' name='email' />
                    <FormikControl control='textarea' label='Description' name='description' />
                    <FormikControl control='select' label='Select the Number' options={options} name='selectnumber' />
                    <FormikControl control='radio' label='Radio topic' options={options2} name='checknumber' />
                    <FormikControl control='checkbox' label='Checkbox topics' options={options2} name='checkBoxoptions' />
                    <button type="submit">Submit</button>
                </Form>)
            }}
        </Formik>
    )
}

export default FormikContainer
