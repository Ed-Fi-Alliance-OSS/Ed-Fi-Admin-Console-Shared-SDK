import { Button, Flex, Heading } from "@chakra-ui/react"

interface EdxModalContentWrapperProps {
    heading: string
    hideControls?: boolean
    children: JSX.Element | JSX.Element[]
    isSavingChanges?: boolean
    onSave: () => void
    onCancel: () => void
}

const EdxModalContentWrapper = ({ heading, hideControls, isSavingChanges, children, onSave, onCancel }: EdxModalContentWrapperProps) => {
    return (
        <Flex
            flexDir='column'
            bg='white'
            padding='24px 16px'>
                <Flex alignItems='center' justifyContent='space-between' w='full'>
                    <Heading
                        fontFamily='Poppins'
                        fontWeight='700'
                        fontSize='2xl'>
                            {heading}
                    </Heading>
                    {!hideControls &&  <Flex>
                        <Button
                            aria-label="Cancel"
                            onClick={onCancel}
                            size='xs'
                            borderRadius='4px'
                            variant='solid'
                            minW='72px'>
                                Cancel
                        </Button>
                        <Button
                            aria-label="Save changes"
                            onClick={onSave}
                            loading={isSavingChanges}
                            size='xs'
                            borderRadius='4px'
                            variant='solid'
                            ml='10px'
                            minW='68px'>
                                Save
                        </Button>
                    </Flex>}
                </Flex>
                <Flex flexDir='column' mt='25px' w='full'>
                    {children}
                </Flex>
        </Flex>
    )
}

export default EdxModalContentWrapper
