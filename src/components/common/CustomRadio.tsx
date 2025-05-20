import { RadioGroup } from "@chakra-ui/react"

interface CustomRadioProps {
    value: any
    text: string
    isChecked?: boolean
    name?: string
    onChange?: (value: any) => void
}

const CustomRadio = ({ isChecked, text, value, name, onChange }: CustomRadioProps) => {
    return (
        <RadioGroup.Root value={isChecked ? value : undefined} name={name} onValueChange={onChange}>
            <RadioGroup.Item value={value} checked={isChecked}>
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{text}</RadioGroup.ItemText>
            </RadioGroup.Item>
        </RadioGroup.Root>
    )
}

export default CustomRadio
