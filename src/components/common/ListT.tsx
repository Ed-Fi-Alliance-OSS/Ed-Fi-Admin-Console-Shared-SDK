import { CheckIcon } from "@chakra-ui/icons"
import { Flex, Heading, List, ListItem, Text } from "@chakra-ui/react"
import { ListTItem } from "./ListT.types"

interface ListTProps {
    items: ListTItem[]
    width?: string
    minWidth?: string
    maxWidth?: string
    onSelectItem: (item: ListTItem) => void
}

const ListT = ({ items, width, minWidth, maxWidth, onSelectItem }: ListTProps) => {
    return (
        <List w={width} minW={minWidth} maxW={maxWidth}>
            {items.map(item => 
                <ListItem 
                    key={item.title}
                    display='flex'
                    alignItems='center'
                    borderBottom='1px'
                    borderBottomColor='gray.300'
                    padding='10px'>
                        <Flex>
                            <Flex 
                                bg='blue.500' 
                                alignItems='center'
                                justifyContent='center'
                                borderRadius='full'
                                padding='5px'
                                h='48px' 
                                w='48px'>
                                    <Text color='white'>TEE</Text>
                            </Flex>
                        </Flex>
                        <Flex 
                            flexDir='column' 
                            justifyContent='center'
                            marginLeft='10px'>
                                <Heading
                                    fontFamily='Poppins'
                                    fontWeight='700'
                                    size='xs'>{item.title}</Heading>
                                <Text
                                    fontWeight='400'
                                    fontFamily='Poppins'
                                    size='xs'>
                                        {item.description}
                                </Text>
                        </Flex>
                        <Flex ml='auto' w='auto'>
                            <Flex  
                                cursor='pointer'
                                bg={item.selected? 'blue.500' : 'white'}
                                color='white'
                                onClick={() => onSelectItem(item)}
                                border='2px solid'
                                borderColor='gray.300'
                                alignItems='center'
                                justifyContent='center'
                                h='15px'
                                w='15px'>
                                    {item.selected && <CheckIcon fontSize='10px' />}
                            </Flex>
                        </Flex>
                </ListItem>
            )}
        </List>
    )
}

export default ListT