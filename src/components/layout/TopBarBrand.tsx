import { Flex } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/system"
import modeColors from "../../themes/baseTheme/modeColors"
import TopBarBrandDescriptor from "./TopBarBrandDescriptor"

interface TopBarBrandProps {
  imageUrl?: string
  appName?: string
  onClick?: () => void
}

const TopBarBrand = ({ onClick }: TopBarBrandProps) => {
  const { colorbluea } = modeColors
  const bg = useColorModeValue(colorbluea.light, colorbluea.dark)

  return (
    <Flex overflow='hidden' bg={bg} h='full' position='relative' w='auto'>
      <TopBarBrandDescriptor onClick={onClick} />
    </Flex>
  )
}

export default TopBarBrand
