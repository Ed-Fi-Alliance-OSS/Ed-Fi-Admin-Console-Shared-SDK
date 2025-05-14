import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Text
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react"
import useSideBarAccordionItem from '../../hooks/useSideBarAccordionItem'
import { SideBarMenuItemData } from './SideBar'
import SideBarMenuSubItemList from './SideBarMenuSubItemList'

interface SideBarMenuAccordionItemProps {
    item: SideBarMenuItemData
    showText: boolean
    selectedItemId: string
    selectedAccordionId: string | undefined
    isOpen: boolean
    backgroundColor?: string
    activeColor?: string 
    activeSubItemColor?: string
    hoverColor?: string 
    hoverSubItemColor?: string 
    textColor?: string 
    onClickItem: (id: string) => any
    onToggleAccordion: (id: string) => void
}

const SideBarMenuAccordionItem = ({ item, isOpen, showText, selectedItemId, selectedAccordionId, backgroundColor, activeColor, activeSubItemColor, hoverColor, hoverSubItemColor, textColor, onClickItem, onToggleAccordion }: SideBarMenuAccordionItemProps) => {
    const { showAsSelectedAccordion } = useSideBarAccordionItem({
        item, 
        selectedAccordionId, 
        selectedItemId, 
        isOpen 
    })

    const [ popoversEnabled, setPopoversEnabled ] = useState(true)

    const onPopoverClose = () => {
        setPopoversEnabled(!showText)
    }

    const onPopoverOpen = () => {
        setPopoversEnabled(!showText)
    }

    return (
        <Accordion index={[isOpen? 0 : -1]} allowToggle w='full'>
            <AccordionItem border="none">
                <Popover
                    placement='right'
                    trigger='hover'
                    isOpen={ (!showText && popoversEnabled) ? undefined : false }
                    onOpen={onPopoverOpen}
                    onClose={onPopoverClose}>
                    <PopoverTrigger>
                        <AccordionButton
                            onClick={() => onToggleAccordion(item.id)}
                            display='flex'
                            bg={showAsSelectedAccordion()? ( hoverColor ?? '#6077c3') : "transparent"}
                            padding='0px 6px'
                            borderRadius='4px'
                            color={ textColor ?? "white" }
                            minW='auto'
                            minH='24px'
                            w='full'
                            aria-label={item.text}
                            _hover={{ backgroundColor: activeColor ?? "#4964bb" }}>
                                <Flex aria-hidden alignSelf='flex-start' color={ textColor ?? 'white' } fontSize='20px' w='20px'>
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
                                                    textAlign="start"
                                                    lineHeight='1.2'
                                                    fontFamily='Poppins'
                                                    fontSize='12px'
                                                    fontWeight='700'
                                                    marginLeft='10px'>{ item.text } </Text>
                                    </motion.div>}
                                </AnimatePresence>
                                <AccordionIcon alignSelf='flex-start' color={ textColor ?? 'white' } ml='auto' />
                        </AccordionButton>
                    </PopoverTrigger>
                    <PopoverContent
                        bg={ textColor ?? 'white' }
                        border='none'
                        display= 'flex'
                        width= "unset"
                        >
                        <PopoverBody
                            paddingLeft='7px'
                            width='auto'>
                            <Text
                                color={ backgroundColor ?? "blue.900" }
                                textAlign="start"
                                lineHeight='1.2'
                                fontFamily='Poppins'
                                fontSize='12px'
                                fontWeight='700'>
                                    { item.text }
                            </Text>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <AccordionPanel pl='8px' pr='0' pb='0'>
                    { item.subItems && <SideBarMenuSubItemList 
                        subItems={item.subItems}
                        selectedItemId={selectedItemId}
                        textColor={ textColor ?? 'white' }
                        activeSubItemColor={activeSubItemColor} 
                        hoverSubItemColor={hoverSubItemColor} 
                        onClickItem={onClickItem} /> }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default SideBarMenuAccordionItem