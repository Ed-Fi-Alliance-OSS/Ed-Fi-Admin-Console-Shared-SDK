import { Input } from "@chakra-ui/react"
import { ChangeEvent, KeyboardEvent } from 'react'
import CustomErrorField from './CustomErrorField'

interface CustomInputProps {
    id: string
    value: any
    error?: string
    placeholder?: string
    disabled?: boolean
    readOnly?: boolean
    type?: 'email' | 'text' | 'password'
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onEnterKey?: (e: KeyboardEvent<HTMLInputElement>) => void
}

const CustomInput = ({ id, type, value, placeholder, error, disabled, onChange, onEnterKey, readOnly  }: CustomInputProps) => {
    const checkKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && onEnterKey)
            return onEnterKey(e)
    }

    return (
        <>
            {error && <CustomErrorField errorMessage={error} />}
            <Input
                onChange={onChange}
                onKeyDown={checkKeyDown}
                readOnly={readOnly}
                id={id}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                type={type? type : 'text'}
                size='xs' />
        </>
    )
}

export default CustomInput
