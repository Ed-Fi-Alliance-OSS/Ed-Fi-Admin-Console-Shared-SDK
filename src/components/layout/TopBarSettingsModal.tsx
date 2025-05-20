import { Dialog, Box, IconButton } from "@chakra-ui/react"
import SettingsModalContentWrapper from "./SettingsModalContentWrapper"

interface TopBarSettingsModalProps {
    show: boolean
    content?: JSX.Element
    onClose: () => void
}

const TopBarSettingsModal = ({ show, content, onClose }: TopBarSettingsModalProps) => {
    return (
        <Dialog.Root
            open={show}
            onOpenChange={(isOpen: boolean) => !isOpen && onClose()}
            modal={true}>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Box
                            borderRadius='0'
                            top='0rem'
                            marginTop='0'
                            height='100vh'
                            marginLeft='auto'
                            maxWidth='629px'
                            width='629px'
                        >
                            <Dialog.CloseTrigger />
                            <Box
                                bg='#eff4f6'
                                padding='111px 67px 463px 42px'
                                position='relative'
                                left='0'
                                width='629px'
                                maxWidth='629px'
                            >
                                <SettingsModalContentWrapper
                                    onSave={() => console.log('save settings...')}
                                    onCancel={onClose}>
                                    {content}
                                </SettingsModalContentWrapper>
                            </Box>
                        </Box>
                    </Dialog.Content>
                </Dialog.Positioner>
        </Dialog.Root>
    )
}

export default TopBarSettingsModal
