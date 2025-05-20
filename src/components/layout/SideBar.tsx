import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import { useLayoutEffect, useRef, useState } from "react";
import SideBarMenu from "./SideBarMenu";

export interface SideBarMenuSubItemData {
  id: string;
  text: string;
}

export interface SideBarMenuItemData {
  id: string;
  text: string;
  icon: JSX.Element;
  subItems?: SideBarMenuSubItemData[];
  accessibleByRole?: string[];
}

interface SideBarProps {
  show?: boolean;
  selectedItemId: string;
  ariaCurrentType:
    | boolean
    | "time"
    | "page"
    | "false"
    | "true"
    | "step"
    | "location"
    | "date"
    | undefined;
  items: SideBarMenuItemData[];
  activeColor?: string;
  activeSubItemColor?: string;
  subItemHoverColor?: string;
  hoverColor?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  onClickItem: (id: string) => any;
  currentUserAccessRole?: string;
}

const SideBar = ({
  items,
  selectedItemId,
  ariaCurrentType,
  show,
  activeColor,
  activeSubItemColor,
  subItemHoverColor,
  hoverColor,
  textColor,
  borderColor,
  backgroundColor,
  onClickItem,
  currentUserAccessRole,
}: SideBarProps) => {
  const [expanded, setExpanded] = useState(false);
  const bg = useColorModeValue("blue.600", "blue.900");

  const onToggleExpand = (event: React.MouseEvent) => {
    setExpanded(!expanded);
    event.stopPropagation();
  };
  const onExpand = () => {
    setExpanded(() => true);
  };

  const sidebarToggleButtonClick = (event: React.MouseEvent) => {
    setExpanded(!expanded);
    event.stopPropagation();
  };
  const sidebarClick = (event: React.MouseEvent) => {
    // Only DIV this will activate on is the sidebar itself,
    // otherwise the target are various other types of elements
    // or if this is closed it needs to open in all cases
    let isDiv =
      event?.target instanceof HTMLElement &&
      event?.target?.tagName.toLowerCase() === "div";
    if (isDiv || !expanded) {
      onToggleExpand(event);
    }
  };

  const onSelectItem = (id: string) => {
    onClickItem(id);
  };

  const sideBarRef = useRef<any>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useLayoutEffect(() => {
    if (sideBarRef.current) {
      setMenuHeight(window.innerHeight - sideBarRef.current.offsetHeight);
    }
  }, [sideBarRef]);

  return (
    <Flex
      ref={sideBarRef}
      display={show === false ? "none" : "block"}
      flexDirection="column"
      bg={backgroundColor ?? bg}
      transition="all 0.5s ease-in-out"
      h="full"
      w={expanded ? "208px" : "50px"}
      position="relative"
      zIndex="1"
      onClick={sidebarClick}
    >
      <Flex
        display="block"
        flexDirection="column"
        bg={backgroundColor ?? bg}
        padding={expanded ? "0 20px" : "0 10px"}
        transition="all 0.5s ease-in-out"
        alignSelf="flex-start"
        position="sticky"
        top="120px"
        left="0"
        h="70vh"
        w={expanded ? "208px" : "50px"}
      >
        <SideBarMenu
          showText={expanded}
          currentType={ariaCurrentType}
          selectedItemId={selectedItemId}
          items={items}
          borderColor={borderColor}
          backgroundColor={backgroundColor ?? bg}
          activeColor={activeColor}
          activeSubItemColor={activeSubItemColor}
          hoverSubItemColor={subItemHoverColor}
          hoverColor={hoverColor}
          textColor={textColor}
          onClickItem={onSelectItem}
          onExpand={onExpand}
          currentUserAccessRole={currentUserAccessRole}
        />
        <Button
          aria-label={expanded ? "Close Sidebar" : "Open Sidebar"}
          onClick={sidebarToggleButtonClick}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="white"
          left="100%"
          bottom="0%"
          color={backgroundColor ?? "blue.900"}
          fontSize="md"
          position="absolute"
          h="48px"
          minW="32px"
          w="32px"
        >
          {expanded ? (
            <FaArrowLeft aria-hidden />
          ) : (
            <FaArrowRight aria-hidden />
          )}
        </Button>
      </Flex>
    </Flex>
  );
};

export default SideBar;
