import { NumberInput, Box } from "@chakra-ui/react"
import CustomErrorField from "./CustomErrorField"

interface CustomNumberInputProps {
    id: string
    value: number
    error?: string
    defaultValue?: number
    min?: number
    max?: number
    disabled?: boolean
    onChange: (valueString: string | null | undefined) => void
}

interface ValueChangeDetails {
    value: string
}

const CustomNumberInput = ({ id, value, defaultValue, min, max, error, disabled, onChange }: CustomNumberInputProps) => {
    return (
        <>
            {error && <CustomErrorField errorMessage={error} />}
            <Box 
                borderRadius="md" 
                overflow="hidden" 
                width="80px"
                boxShadow="sm"
                _hover={{ boxShadow: "md" }}
                transition="box-shadow 0.2s"
            >
                <NumberInput.Root
                    id={id}
                    value={value}
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                    disabled={disabled}
                    size="xs"
                    onValueChange={(details: ValueChangeDetails) => onChange(details.value)}
                    clampValueOnBlur={true}
                    borderColor="blue.200"
                    _hover={{ borderColor: "blue.300" }}
                    _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)" }}
                >
                    <NumberInput.Input 
                        aria-label="Number of items per page" 
                    />
                    <NumberInput.Control>
                        <NumberInput.IncrementTrigger aria-label="Increase items per page" />
                        <NumberInput.DecrementTrigger aria-label="Decrease items per page" />
                    </NumberInput.Control>
                </NumberInput.Root>
            </Box>
        </>
    )
}

export default CustomNumberInput
