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
                    colorPalette="primaryGray300">
                        Continue Session
                </Button>
                <Button
                    aria-label="Log out"
                    onClick={onLogout}
                    loading={isClosingSession}
                    variant="solid" //'primaryBlue600'
                    size='md'
                    marginLeft='10px'>
                        Log out
                </Button>
            </>}/>
    )
}

export default SessionInactiveModal
