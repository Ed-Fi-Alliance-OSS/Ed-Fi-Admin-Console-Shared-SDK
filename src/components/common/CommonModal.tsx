import { Heading, Dialog, Flex, Text } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/system'

interface LogoutModalProps {
    show: boolean
    header: JSX.Element | string
    content: JSX.Element | string
    canClose: boolean
    closeOnOverlayClick?: boolean
    footer: JSX.Element
    onClose: () => void
}

const CommonModal = ({ show, closeOnOverlayClick, canClose, header, content, footer, onClose }: LogoutModalProps) => {
    const { colorMode } = useColorMode()
    const bg = "white"

    return (
        <Dialog.Root
            closeOnOverlayClick={closeOnOverlayClick ?? false}
            open={show}
            onOpenChange={(open: boolean) => { if (!open) onClose(); }}>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Flex
                            aria-label={`${header} Dialog`}
                            bg={bg}
                            minH='246px'
                            minW='352px'
                            w='auto'
                            direction='column'>
                            <Dialog.Header>
                                <Heading fontSize='md'>
                                    {header}
                                </Heading>
                            </Dialog.Header>
                            {canClose && <Dialog.CloseTrigger />}
                            <Dialog.Body w='auto'>
                                <Text fontFamily='Poppins' marginTop='15px'>
                                    {content}
                                </Text>
                            </Dialog.Body>
                            <Dialog.Footer
                                justifyContent='space-around'
                                paddingBottom='50px'>
                                {footer}
                            </Dialog.Footer>
                        </Flex>
                    </Dialog.Content>
                </Dialog.Positioner>
        </Dialog.Root>
    )
}

export default CommonModal
