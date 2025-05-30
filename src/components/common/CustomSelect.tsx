import { NativeSelect } from "@chakra-ui/react"
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
      <NativeSelect.Root
        id={id ? id : 'select'}
        disabled={disabled}
        size='xs'
        style={{ height: height ? height : 'auto' }}
        aria-label={placeholder ? placeholder : "Select an option"}
      >
        <NativeSelect.Field
          value={value || ""}
          onChange={onChange}
        >
          {placeholder && <option value="" disabled={!value}>{placeholder}</option>}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </>
  )
}

export default CustomSelect
