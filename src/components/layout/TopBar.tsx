import { Flex } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/system"
import modeColors from "../../themes/baseTheme/modeColors"

interface TopBarProps {
    leftComponent: JSX.Element
    rightComponent: JSX.Element
}

const TopBar = ({ leftComponent, rightComponent }: TopBarProps) => {

    const { colorbluea } = modeColors
    const bg = useColorModeValue(colorbluea.light, colorbluea.dark)
    const borderColor = useColorModeValue('#d9e1e5', colorbluea.dark)

    return (
        <Flex
            bg={bg}
            alignItems='center'
            justifyContent='space-between'
            position='fixed'
            borderBottom='2px'
            borderColor={borderColor}
            h='48px'
            w="100%"
            zIndex='3'>
                <Flex
                    bg='white'
                    h='full'
                    alignItems='center'
                    justifyContent='center'
                    paddingLeft='10px'>
                        {leftComponent}
                </Flex>
                <Flex paddingRight='10px'>
                    {rightComponent}
                </Flex>
        </Flex>
    )
}

export default TopBar
