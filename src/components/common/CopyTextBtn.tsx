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
        <Button
            aria-label="Copy value"
            onClick={onCopyValue}
            borderRadius='4px'
            color='blue.600'
            bg='white'
            padding={withoutBorder? '0px' : '4px'}
            border={withoutBorder? 'none' : '1px'}
            variant='solid'
            h='24px'
            minW='24px'
            maxW='24px'
            title={tooltipMessage}
            data-tooltip-message={tooltipMessage === copyMessage ? 'copy' : 'copied'}
            onMouseLeave={onClose}>
            <CopyIcon fontSize={withoutBorder? '20px' : 'auto'} aria-hidden="true" focusable="false" />
        </Button>
    )
}

export default CopyTextBtn
