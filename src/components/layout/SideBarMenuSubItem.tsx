import { Button } from '@chakra-ui/react'
import { SideBarMenuSubItemData } from "./SideBar"

interface SideBarMenuSubItemProps {
    item: SideBarMenuSubItemData
    selectedItemId: string 
    textColor?: string 
    activeSubItemColor?: string 
    hoverSubItemColor?: string 
    onClickItem: (id: string) => any
}

const SideBarMenuSubItem = ({ item, selectedItemId, textColor, activeSubItemColor, hoverSubItemColor, onClickItem }: SideBarMenuSubItemProps) => {
    return (
        <Button
            onClick={() => onClickItem(item.id)}
            justifyContent='start'
            color={textColor ?? "white"}   
            bg={item.id === selectedItemId? ( activeSubItemColor ?? '#6077c3') : "transparent"}
            fontFamily='Poppins'
            fontSize='12px'
            fontWeight={selectedItemId === item.id? '700' : '400'}
            minH='28px'
            h={item.text.length > 13? '40px' : '28px'}
            pl='12px'
            w='full'
            whiteSpace='pre-line'
            textAlign='left'
            _hover={{ backgroundColor: hoverSubItemColor ?? "rgba(73, 100, 187, 0.7)" }}>
                { item.text }
        </Button>
    )
}

export default SideBarMenuSubItem