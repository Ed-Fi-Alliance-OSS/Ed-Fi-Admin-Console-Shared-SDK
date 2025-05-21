import { Box, Flex, HStack, RadioGroup, Text } from "@chakra-ui/react"

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
        <HStack>
          <RadioGroup.Item>
            <RadioGroup.ItemControl>
              <RadioGroup.ItemIndicator />
            </RadioGroup.ItemControl>
            <RadioGroup.ItemHiddenInput>{value}</RadioGroup.ItemHiddenInput>
            <RadioGroup.ItemText>{text}</RadioGroup.ItemText>
          </RadioGroup.Item>
        </HStack>
      </RadioGroup.Root>
    )
}

export default CustomRadio
