import { Accordion, Popover, Flex, Text, Button, Box } from '@chakra-ui/react';
import { useState } from "react";
import useSideBarAccordionItem from '../../hooks/useSideBarAccordionItem';
import { SideBarMenuItemData } from './SideBar';
import SideBarMenuSubItemList from './SideBarMenuSubItemList';

interface SideBarMenuAccordionItemProps {
  item: SideBarMenuItemData;
  showText: boolean;
  selectedItemId: string;
  selectedAccordionId: string | undefined;
  isOpen: boolean;
  backgroundColor?: string;
  activeColor?: string;
  activeSubItemColor?: string;
  hoverColor?: string;
  hoverSubItemColor?: string;
  textColor?: string;
  onClickItem: (id: string) => any;
  onToggleAccordion: (id: string) => void;
}

const SideBarMenuAccordionItem = ({ item, isOpen, showText, selectedItemId, selectedAccordionId, backgroundColor, activeColor, activeSubItemColor, hoverColor, hoverSubItemColor, textColor, onClickItem, onToggleAccordion }: SideBarMenuAccordionItemProps) => {
  const { showAsSelectedAccordion } = useSideBarAccordionItem({
    item,
    selectedAccordionId,
    selectedItemId,
    isOpen
  });

  const [popoversEnabled, setPopoversEnabled] = useState(true);

  const onPopoverClose = () => {
    setPopoversEnabled(!showText);
  };

  const onPopoverOpen = () => {
    setPopoversEnabled(!showText);
  };

  return (
    <Accordion.Root index={[isOpen? 0 : -1]} collapsible w='full'>
      <Accordion.Item>
        <Popover.Root
          placement='right'
          open={(!showText && popoversEnabled) ? undefined : false}
          onOpenChange={(open: boolean) => open ? onPopoverOpen() : onPopoverClose()}
        >          <Popover.Trigger>
            <Accordion.ItemTrigger>
              <Flex
                as="div"
                role="button"
                tabIndex={0}
                width='100%'
                display='flex'
                bg={showAsSelectedAccordion() ? (hoverColor ?? '#6077c3') : 'transparent'}
                padding='0px 6px'
                borderRadius='4px'
                color={textColor ?? 'white'}
                minW='auto'
                minH='24px'
                aria-label={item.text}
                cursor='pointer'
                _hover={{ backgroundColor: activeColor ?? '#4964bb' }}
                _focus={{ boxShadow: 'outline' }}
                onClick={() => onToggleAccordion(item.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onToggleAccordion(item.id);
                  }
                }}
              >
          <Flex
            aria-hidden
            alignSelf='flex-start'
            color={textColor ?? 'white'}
            fontSize='20px'
            w='20px'
          >
            {item.icon}
          </Flex>
          {showText && (
            <Text
              color={textColor ?? "white"}
              textAlign="start"
              lineHeight='1.2'
              fontFamily='Poppins'
              fontSize='12px'
              fontWeight='700'
              marginLeft='10px'
              whiteSpace="nowrap"
              overflow="hidden"
            >
              {item.text}
            </Text>
          )}
          <Box
            alignSelf='flex-start'
            color={textColor ?? 'white'}
            ml='auto'
          >
            {/* Custom chevron icon for accordion */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.584l3.71-3.354a.75.75 0 111.02 1.1l-4.25 3.846a.75.75 0 01-1.02 0l-4.25-3.846a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />            </svg>
          </Box>
              </Flex>
            </Accordion.ItemTrigger>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Body>
              <Flex
          as="div"
          bg={textColor ?? 'white'}
          border='none'
          display='flex'
          paddingLeft='7px'
          width='auto'
              >
          <Text
            color={backgroundColor ?? "blue.900"}
            textAlign="start"
            lineHeight='1.2'
            fontFamily='Poppins'
            fontSize='12px'
            fontWeight='700'
          >
            {item.text}
          </Text>
              </Flex>
            </Popover.Body>
          </Popover.Content>
        </Popover.Root>
        <Accordion.ItemContent>
          <Box pl='8px' pr='0' pb='0'>
            {item.subItems && <SideBarMenuSubItemList
              subItems={item.subItems}
              selectedItemId={selectedItemId}
              textColor={textColor ?? 'white'}
              activeSubItemColor={activeSubItemColor}
              hoverSubItemColor={hoverSubItemColor}
              onClickItem={onClickItem} />}
          </Box>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default SideBarMenuAccordionItem;
