import { Dialog, Box } from "@chakra-ui/react"
import EdxModalContentWrapper from "./EdxModalContentWrapper"

interface EdxModalProps {
    show: boolean
    heading: string
    hideControls?: boolean
    isSavingChanges?: boolean
    children: JSX.Element | JSX.Element[]
    onSave?: () => void
    onClose: () => void
}

const EdxModal = ({ heading, show, isSavingChanges, hideControls, children, onSave, onClose }: EdxModalProps) => {
    return (
        <Dialog.Root
            open={show}
            onOpenChange={(open: boolean) => { if (!open) onClose(); }}
            motionPreset='slide-in-right'>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Box aria-label={`${heading} Dialog`} role="dialog">
                  <Dialog.Content>
                    <Dialog.CloseTrigger />
                    <Dialog.Body>
                      <Box
                        bg='#eff4f6'
                        padding='111px 67px 463px 42px'
                        left={0}
                        w='629px'
                        maxW='629px'
                        borderRadius={0}
                        top='0rem'
                        mt={0}
                        h='100vh'
                        marginLeft='auto'>
                        <EdxModalContentWrapper
                          heading={heading}
                          hideControls={hideControls}
                          isSavingChanges={isSavingChanges}
                          onSave={onSave ? onSave : () => null}
                          onCancel={onClose}
                        >
                          {children}
                        </EdxModalContentWrapper>
                      </Box>
                    </Dialog.Body>
                  </Dialog.Content>
                </Box>
            </Dialog.Positioner>
        </Dialog.Root>
    )
}

export default EdxModal
