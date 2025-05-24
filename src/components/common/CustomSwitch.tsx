import { Flex } from "@chakra-ui/react"
import { Switch } from "@chakra-ui/react"
import { ChangeEvent } from "react"

interface CustomSwitchProps {
    id?: string
    isChecked: boolean
    isDisabled?: boolean
    onCheck?: (e: ChangeEvent<HTMLInputElement>) => void
    label?: string
}

const CustomSwitch = ({ id, isChecked, isDisabled, onCheck, label }: CustomSwitchProps) => {
    return (
        <Flex>
            <Switch.Root id={id} isChecked={isChecked} disabled={isDisabled}>
                <Switch.HiddenInput onChange={onCheck} data-testid={id} />
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
                {label && <Switch.Label>{label}</Switch.Label>}
            </Switch.Root>
        </Flex>
    )
}

export default CustomSwitch
