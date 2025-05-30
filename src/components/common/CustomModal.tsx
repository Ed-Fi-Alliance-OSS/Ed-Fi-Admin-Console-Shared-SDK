import { Heading, Dialog, Flex, Text } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/system'

interface InformationModalProps {
  type: 'alert' | 'confirmation' | 'information'
  content: JSX.Element | string
  header: JSX.Element | string
  footer: JSX.Element
  isOpen: boolean
  onClose: () => void
}

const CustomModal = ({ type, header, content, footer, isOpen, onClose }: InformationModalProps) => {
  const { colorMode } = useColorMode()
  const bgColor = colorMode === 'light' ? "white" : "blue.700"

  const selectModalTopColor = () => {
    if (type === 'alert')
      return "red.600"
    if (type === 'confirmation')
      return colorMode === 'light' ? "blue.600" : "blue.500"

    return "blue.100"
  }

  return (
    <Dialog.Root isOpen={isOpen} onClose={onClose}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Flex bg={bgColor}
            borderRadius="4px"
            border='10px solid'
            borderColor={selectModalTopColor()}
            borderBottom='0px'
            borderRight='0px'
            borderLeft='0px'
            minW='517px'
            h='auto'
            w='auto'>
            <Dialog.Header
              fontSize='24px'
              paddingBottom='0px'>
              {header}
            </Dialog.Header>
            <Dialog.CloseTrigger />
            <Dialog.Body
              marginBottom='10px'
              paddingTop='0px'
              w=''>
              {typeof (content) === 'string' ?
                <Text
                  fontFamily='Poppins'>{content}</Text> : content}
            </Dialog.Body>
            <Dialog.Footer paddingBottom='35px'>
              {footer}
            </Dialog.Footer>
          </Flex>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

export default CustomModal
