import { Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue } from '@chakra-ui/react'

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
    const bg = useColorModeValue("white", "blue.700")

    return (
        <Modal 
            closeOnOverlayClick={closeOnOverlayClick ?? false} 
            isOpen={show} 
            onClose={onClose} 
            blockScrollOnMount={true}>
                <ModalOverlay />
                <ModalContent aria-label={`${header} Dialog`} bg={bg} minH='246px' minW='352px' top='15%' w='auto'>
                    <ModalHeader></ModalHeader>
                    {canClose && <ModalCloseButton fontSize='xs' />}
                    <ModalBody w='auto'>
                        <Heading size='md'>
                            {header}
                        </Heading>
                        <Text fontFamily='Poppins' marginTop='15px'>
                            {content}
                        </Text>
                    </ModalBody>
                    <ModalFooter 
                            justifyContent='space-around'
                            paddingBottom='50px'>
                        {footer}
                    </ModalFooter>
                </ModalContent>
        </Modal>
    )
}

export default CommonModal