import { FaMoon as MoonIcon, FaSun as SunIcon } from "react-icons/fa"
import { IconButton } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@chakra-ui/system"

const ToggleModeBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue("blue.900", "white")

    return (
        <IconButton
            aria-label="Toggle dark mode"
            border="none"
            padding="0"
            variant="ghost"
            onClick={toggleColorMode}
        >
            {colorMode === 'light'
                ? <MoonIcon aria-hidden="true" aria-description="Dark Mode Icon" focusable="false" />
                : <SunIcon color={color} aria-description="Light Mode Icon" aria-hidden="true" focusable="false" />
            }
        </IconButton>
    )
}

export default ToggleModeBtn
