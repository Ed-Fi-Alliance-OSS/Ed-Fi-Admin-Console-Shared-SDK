import { Button } from "@chakra-ui/react"
import CommonModal from "./CommonModal"

interface SessionExpiredModalProps {
    show: boolean
    isClosingSession: boolean
    onLogout: () => Promise<void>
    onClose: () => void
}

const SessionInactiveModal = ({ show, isClosingSession, onLogout, onClose }: SessionExpiredModalProps) => {
    return (
        <CommonModal
            show={show}
            onClose={onClose}
            canClose={false}
            closeOnOverlayClick={false}
            header='Inactive Session'
            content='To continue your session, please click on "Continue Session"'
            footer={<>
                <Button
                    aria-label="Continue session"
                    onClick={onClose}
                    disabled={isClosingSession}
                    size='md'
                    variant="solid"
                    bg='gray.300'
                    border='1px'
                    borderColor='gray.300'
                    boxShadow='0 0 0 1px rgba(124, 125, 128, 0.93)'
                    color='white'
                    padding='10px'
                    fontFamily='Poppins'
                    fontSize='14px'
                    fontWeight='600'
                    lineHeight='1.2'
                    _hover={{ bg: 'gray.400', borderColor: 'gray.400', boxShadow: '0 0 0 3px rgba(147, 147, 148, 0.86)' }}
                    colorPalette="primaryGray300">
                        Continue Session
                </Button>
                <Button
                    aria-label="Log out"
                    onClick={onLogout}
                    loading={isClosingSession}
                    variant="solid"
                    bg='blue.600'
                    border='1px'
                    borderColor='blue.600'
                    boxShadow='0 0 0 1px rgba(59, 130, 246, 0.3)'
                    color='white'
                    padding='10px'
                    fontFamily='Poppins'
                    fontSize='14px'
                    fontWeight='600'
                    lineHeight='1.2'
                    _hover={{ bg: 'blue.700', borderColor: 'blue.700', boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)' }}
                    size='md'
                    marginLeft='10px'>
                        Log out
                </Button>
            </>}/>
    )
}

export default SessionInactiveModal
