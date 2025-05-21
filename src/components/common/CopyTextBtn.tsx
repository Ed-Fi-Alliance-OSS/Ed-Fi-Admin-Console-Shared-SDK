import { AiOutlineCopy as CopyIcon } from "react-icons/ai"
import { Button } from "@chakra-ui/react"
import { Tooltip } from "@chakra-ui/tooltip"
import { useState } from "react"

interface CopyTextBtnProps {
    withoutBorder?: boolean
    value?: string
}

const copyMessage = "Click to copy."
const copiedMessage = "Copied!"

const CopyTextBtn = ({ value, withoutBorder }: CopyTextBtnProps) => {
    const [ tooltipMessage, setTooltipMessage ] = useState(copyMessage)

    const onCopyValue = () => {
        navigator.clipboard.writeText(value ?? "")

        setTooltipMessage(copiedMessage)
    }

    const onClose = () => {
        if (tooltipMessage === copiedMessage)
            setTooltipMessage(copyMessage)
    }

    return (
        <Tooltip
            display='flex'
            justifyContent='center'
            borderRadius='4px'
            label={tooltipMessage}
            hasArrow
            bg={tooltipMessage === copyMessage? 'blue.600' : 'green.700'}
            placement='top'
            closeOnClick={false}
            onClose={onClose}
            w='120px'>
                <Button
                    aria-label="Copy value"
                    onClick={onCopyValue}
                    borderRadius='4px'
                    color='blue.600'
                    padding={withoutBorder? '0px' : '4px'}
                    border={withoutBorder? 'none' : '1px'}
                    variant='solid'
                    /*{withoutBorder? 'simple' : 'secondaryBlue600'}*/
                    h='24px'
                    minW='24px'
                    maxW='24px'>
                        <CopyIcon fontSize={withoutBorder? '20px' : 'auto'} aria-hidden="true" focusable="false" />
                </Button>
        </Tooltip>
    )
}

export default CopyTextBtn
