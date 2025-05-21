import { Button, Flex, Heading } from "@chakra-ui/react"

interface RightSlideInPanelHeaderProps {
    headerText: string
    actionText: string
    isSaving: boolean
    headerTextColor?: string
    headerTextFontSize?: string
    headerTextFontWeight?: string
    headerTextFontFamily?: string
    actionButtonVariant?: string
    cancelButtonVariant?: string
    buttonsSize?: "lg" | "md" | "sm" | "xs"
    alignItems?: string
    isDisabled?: boolean
    headerWidth?: string
    onAction: () => void
    onClose: () => void
}

const RightSlideInPanelHeader = ({ actionText, actionButtonVariant, cancelButtonVariant, buttonsSize, headerText, headerTextColor, headerTextFontSize, headerTextFontFamily, headerTextFontWeight, headerWidth, alignItems, isDisabled, isSaving, onAction, onClose }: RightSlideInPanelHeaderProps) => {
    return (
        <Flex justifyContent='space-between' alignItems={ alignItems ?? "flex-end" } w='full'>
            <Heading
                color={ headerTextColor ?? "black" }
                fontFamily={ headerTextFontFamily ?? 'Poppins'}
                fontWeight={ headerTextFontWeight ?? '700'}
                fontSize={ headerTextFontSize ?? '32px'}
                w={headerWidth ?? "auto"}>{headerText}</Heading>
            <Flex alignItems='flex-end'>
                <Button
                    onClick={onClose}
                    variant="solid" //{ cancelButtonVariant ?? 'secondaryBlue600'}
                    size={ buttonsSize ?? 'xs' }
                    padding='0 25px'>Cancel</Button>
                <Button
                    onClick={onAction}
                    variant="solid"
                    colorScheme={ actionButtonVariant ?? 'primaryBlue600' }
                    loading={isSaving}
                    disabled={isSaving || isDisabled}
                    size={ buttonsSize ?? 'xs' }
                    padding='0 25px'
                    ml='10px'>{ actionText }</Button>
            </Flex>
        </Flex>
    )
}

export default RightSlideInPanelHeader
