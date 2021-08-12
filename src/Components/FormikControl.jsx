import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Select from './Select';
import Selectbuttons from './Selectbuttons';
import CheckBoxGroup from './CheckBoxGroup'

function FormikControl(props) {

    const { control, ...rest } = props;

    switch (control) {
        case 'input': return <Input {...rest} />
        case 'textarea': return <Textarea {...rest} />
        case 'select': return <Select {...rest} />
        case 'checkbox': return <CheckBoxGroup {...rest} />
        case 'radio': return <Selectbuttons {...rest} />
        case 'date':
        default: return null;
    }
}

export default FormikControl
