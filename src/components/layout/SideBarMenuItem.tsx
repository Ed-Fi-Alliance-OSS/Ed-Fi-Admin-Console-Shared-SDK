import { Button, Flex, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SideBarMenuItemData } from "./SideBar";

interface SideBarMenuItemProps {
    showText: boolean
    selectedItemId: string 
    currentType: boolean | "time" | "page" | "false" | "true" | "step" | "location" | "date" | undefined
    item: SideBarMenuItemData
    backgroundColor?: string
    activeColor?: string 
    hoverColor?: string 
    textColor?: string 
    onClickItem: (id: string) => any
}

const SideBarMenuItem = ({ item, selectedItemId, currentType, showText, backgroundColor, activeColor, textColor, hoverColor, onClickItem }: SideBarMenuItemProps) => {

    const [ popoversEnabled, setPopoversEnabled ] = useState(true)

    const onPopoverClose = () => {
        setPopoversEnabled(!showText)
    }

    const onPopoverOpen = () => {
        setPopoversEnabled(!showText);
    }

    return (
        <Popover
            placement='right'
            trigger='hover'
            isOpen={ (!showText && popoversEnabled) ? undefined : false }
            onOpen={onPopoverOpen}
            onClose={onPopoverClose}>
            <PopoverTrigger>
                <Button
                    aria-label={ `${item.text}` }
                    onClick={ () => onClickItem(item.id) }
                    color={ textColor ?? 'white' }
                    bg={ item.id === selectedItemId? ( activeColor ?? '#6077c3' ) : "transparent" }
                    aria-current={ item.id === selectedItemId? currentType : undefined }
                    display='flex'
                    justifyContent={ showText? 'flex-start' : 'flex-start' }
                    px='5px'
                    h='auto'
                    minW='auto'
                    minH='auto'
                    w='full'
                    _hover={{ backgroundColor: hoverColor ?? "#4964bb" }}>
                        <Flex aria-hidden fontSize='20px' w='20px'>
                            { item.icon }
                        </Flex>
                        <AnimatePresence>
                            {showText &&
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}>
                                        <Text
                                            color={ textColor ?? 'white' }
                                            fontFamily='Poppins'
                                            fontSize='12px'
                                            fontWeight='700'
                                            textAlign="start"
                                            lineHeight='1.2'
                                            whiteSpace={ showText? "normal" : "nowrap" }
                                            h='auto'
                                            w='100px'
                                            marginLeft='10px'>{ item.text }</Text>
                            </motion.div>}
                        </AnimatePresence>
                </Button>
            </PopoverTrigger>
            <PopoverContent
                bg= { textColor ?? 'white' }
                width= "unset">
                <PopoverBody
                    paddingLeft='7px'>
                    <Text
                        color={ backgroundColor ?? "blue.900" }
                        fontFamily='Poppins'
                        fontSize='12px'
                        fontWeight='700'
                        textAlign="start"
                        lineHeight='1.2'
                        whiteSpace={ showText? "normal" : "nowrap" }
                        h='auto'
                        width='auto'>
                            { item.text }
                    </Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default SideBarMenuItem