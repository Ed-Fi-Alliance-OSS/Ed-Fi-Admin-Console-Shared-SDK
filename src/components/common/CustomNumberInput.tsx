import { NumberInput } from "@chakra-ui/react"
import CustomErrorField from "./CustomErrorField"

interface CustomNumberInputProps {
    id: string
    value: number
    error?: string
    defaultValue?: number
    min?: number
    max?: number
    disabled?: boolean
    onChange: (valString: string, newValue: number) => void
}

const CustomNumberInput = ({ id, value, defaultValue, min, max, error, disabled, onChange }: CustomNumberInputProps) => {
    return (
        <>
            {error && <CustomErrorField errorMessage={error} />}
            <NumberInput.Root
                id={id}
                value={value}
                defaultValue={defaultValue}
                min={min}
                max={max}
                disabled={disabled}
                size="xs"
                onValueChange={onChange}
            >
                <NumberInput.Label>Number input</NumberInput.Label>
                <NumberInput.ValueText />
                <NumberInput.Control>
                    <NumberInput.DecrementTrigger aria-label="Decrease value" />
                    <NumberInput.IncrementTrigger aria-label="Increase value" />
                </NumberInput.Control>
                <NumberInput.Scrubber />
                <NumberInput.Input />
            </NumberInput.Root>
        </>
    )
}

export default CustomNumberInput
