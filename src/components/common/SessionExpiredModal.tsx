import { Button } from "@chakra-ui/react"
import CommonModal from "./CommonModal"

interface SessionExpiredModalProps {
    show: boolean
    onSignIn: () => Promise<void>
    onClose: () => void
}

const SessionExpiredModal = ({ show, onSignIn, onClose }: SessionExpiredModalProps) => {
    return (
        <CommonModal
            show={show}
            canClose={false}
            onClose={onClose}
            header='Session Expired'
            content='Your session has expired due to inactivity.'
            footer={<>
                <Button
                    aria-label="Return to launcher"
                    onClick={onClose}
                    variant="solid"
                    color="primaryGray400">
                        Return to Launcher
                </Button>
                <Button
                    aria-label="Sign in"
                    onClick={onSignIn}
                    variant="solid"
                    color='primaryBlue600'>
                        Sign In
                </Button>
            </>}/>
    )
}

export default SessionExpiredModal
