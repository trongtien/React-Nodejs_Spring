import PropTypes from 'prop-types'
import React from 'react'
import { FormGroup, Label, Input } from "reactstrap";

InputField.prototype = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.string
}

InputField.defaultProps = {
    type: "text",
    label: "",
    placeholder: '',
    disabled: false
}

function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled
    } = props
    const { name } = field
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
            />
        </FormGroup>
    )
}
export default InputField