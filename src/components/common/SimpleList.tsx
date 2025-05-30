import { FaCheck } from "react-icons/fa"
import { Flex, List, Text } from "@chakra-ui/react"
import { SimpleListItem } from "./SimpleList.types"

interface SimpleListProps {
    items: SimpleListItem[]
    width?: string
    minWidth?: string
    maxWidth?: string
    onSelectItem: (item: SimpleListItem) => void
}

const SimpleList = ({ items, width, minWidth, maxWidth, onSelectItem }: SimpleListProps) => {
    return (
        <List.Root
            w={width ? width : 'auto'}
            minW={minWidth}
            maxW={maxWidth}>
                {items.map((item, index) =>
                    <List.Item
                        key={`${item.name}-${index}`}
                        display='flex'
                        alignItems='center'
                        borderBottom='1px'
                        borderBottomColor='gray.300'
                        padding='10px'>
                            <Flex
                                cursor='pointer'
                                bg={item.selected ? 'blue.500' : 'white'}
                                color='white'
                                onClick={() => onSelectItem(item)}
                                border='1px solid'
                                borderColor='gray.300'
                                alignItems='center'
                                justifyContent='center'
                                h='15px'
                                w='15px'>
                                    {item.selected && <FaCheck fontSize='10px' />}
                            </Flex>
                            <Text
                                fontFamily='Poppins'
                                fontWeight='700'
                                fontSize='md'
                                ml='10px'>{item.name}</Text>
                    </List.Item>
                )}
        </List.Root>
    )
}

export default SimpleList
