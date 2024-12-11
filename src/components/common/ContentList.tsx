import { Flex, Heading, List, ListItem, Text } from "@chakra-ui/react"
import { ContentListItem } from "./ContentList.types"

interface ContentListProps {
    items: ContentListItem[]
    maxWidth?: string 
    minWidth?: string 
    width?: string
}

const ContentList = ({ items, minWidth, maxWidth, width }: ContentListProps) => {
    return (
        <List w={width} minW={minWidth} maxWidth={maxWidth}>
            {items.map((item, index) => 
                <ListItem 
                    key={`${item.header}-${index}`}
                    display='flex'
                    alignItems='center'
                    borderBottom='1px'
                    borderBottomColor='gray.300'
                    padding='10px'>
                        <Flex flexDir='column'>
                            <Flex alignItems='center'>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <path d="M0.782686 0.789119C1.28444 0.284337 1.96584 0 2.67722 0H9.3228C10.0341 0 10.7156 0.284336 11.2173 0.789119C11.7189 1.29376 12 1.97733 12 2.68925V6.96808C11.9967 7.29808 11.9193 7.68964 11.7968 7.99587C11.6681 8.29971 11.4473 8.6322 11.2173 8.86817C10.9826 9.09969 10.6513 9.32237 10.3486 9.45206C10.0433 9.57566 9.65203 9.654 9.3228 9.65734H8.6772V10.7722H8.67506C8.67463 10.9654 8.62569 11.2107 8.55263 11.3674C8.45374 11.5423 8.2385 11.7598 8.06415 11.8613L8.06421 11.8614C8.06374 11.8617 8.06328 11.8618 8.06281 11.8621C8.06247 11.8623 8.06211 11.8625 8.06176 11.8627L8.06173 11.8626C7.91107 11.9361 7.66719 11.9958 7.50051 12H7.49819C7.16335 11.9968 6.84405 11.8614 6.60887 11.6243L4.62474 9.65734H2.67722C1.96584 9.65734 1.28444 9.37303 0.782686 8.86817C0.552708 8.6322 0.331875 8.29971 0.203237 7.99587C0.0806773 7.68964 0.0032531 7.29808 0 6.96808V2.68925C0 1.97733 0.28107 1.29376 0.782686 0.789119ZM2.67722 1.36709C2.33108 1.36709 1.99828 1.50538 1.75227 1.75288C1.50611 2.00053 1.36709 2.33727 1.36709 2.68925V6.96808C1.36383 7.16487 1.38955 7.29494 1.46737 7.47539C1.53911 7.65823 1.61199 7.76798 1.75227 7.90444C1.99828 8.15194 2.33108 8.29024 2.67722 8.29024H4.90614C5.0864 8.29024 5.25936 8.36145 5.38737 8.48835L7.31013 10.3945V8.97377C7.31013 8.59629 7.61616 8.29024 7.99367 8.29024H9.3228C9.5172 8.29357 9.64431 8.26812 9.82277 8.19015C10.0039 8.11827 10.1122 8.04544 10.2477 7.90444C10.388 7.76798 10.4609 7.65823 10.5327 7.47539C10.6105 7.29494 10.6362 7.16487 10.6329 6.96808V2.68925C10.6329 2.33727 10.4939 2.00052 10.2477 1.75288C10.0017 1.50538 9.66891 1.36709 9.3228 1.36709H2.67722Z" fill="black"/>
                                </svg>
                                <Text 
                                    fontFamily='Poppins'
                                    fontWeight='400'
                                    size='xs'
                                    ml='10px'>{item.subheader}</Text>
                            </Flex>
                            <Flex 
                                flexDir='column'
                                ml='24px'>
                                    <Heading
                                        fontFamily='Poppins'
                                        mt='5px'
                                        size='sm'>{item.header}</Heading>
                                    <Text
                                        fontFamily='Poppins'
                                        fontWeight='400'
                                        size='sm'>
                                            {item.description}
                                    </Text>
                                    <Flex mt='37px'>
                                        {item.tags.map((tag, index) => 
                                            <Flex 
                                                key={index}
                                                border='1px'
                                                borderColor='gray.300'
                                                padding='2px 10px'
                                                _notFirst={{ ml: '5px' }}
                                                borderRadius='4px'>
                                                    <Text 
                                                        fontFamily='Poppins'
                                                        size='xs'>{tag}</Text>
                                            </Flex>
                                        )}
                                    </Flex>
                            </Flex>
                        </Flex>
                </ListItem>     
            )}
        </List>
    )
}

export default ContentList