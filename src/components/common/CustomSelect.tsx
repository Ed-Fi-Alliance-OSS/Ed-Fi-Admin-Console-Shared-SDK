import { Select } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import CustomErrorField from "./CustomErrorField"

interface SelectOption {
    value: any
    text: string
}

interface CustomSelectProps {
    id?: string
    options: SelectOption[]
    error?: string
    value: any
    disabled?: boolean
    height?: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const CustomSelect = ({ id, value, error, disabled, options, height, placeholder, onChange }: CustomSelectProps) => {
    return (
        <>
            {error && <CustomErrorField errorMessage={error} />}
            <Select.Root
                id={id ? id : 'select'}
                value={value}
                isDisabled={disabled}
                size='xs'
                style={{ height: height ? height : 'auto' }}
            >
                <Select.Trigger>
                    {placeholder && !value && <span>{placeholder}</span>}
                </Select.Trigger>
                <Select.Content>
                    {options.map((option, index) =>
                        <Select.Item key={index} value={option.value}>
                            {option.text}
                        </Select.Item>
                    )}
                </Select.Content>
            </Select.Root>
        </>
    )
}

export default CustomSelect
