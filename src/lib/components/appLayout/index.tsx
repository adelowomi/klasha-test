import { Drawer, DrawerContent, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MobileNav } from "../MobileNav/MobileNav";
import { SideNav } from "../sideNav";
import { TopNav } from "../TopNav/TobNav";

interface IAppLayout {
  firstName: string;
  lastName: string;
  currentRoute: string;
  children?: React.ReactNode;
}

export interface IDisclosureProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const AppLayout: React.FC<IAppLayout> = ({
  firstName,
  lastName,
  currentRoute,
  children,
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <SideNav
        currentRoute={currentRoute}
        disclosure={{ isOpen, onOpen, onClose }}
        display={{ base: "none", md: "none", lg: "block" }}
        // display={"none"}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideNav
            currentRoute={currentRoute}
            disclosure={{ isOpen, onOpen, onClose }}
          />
        </DrawerContent>
      </Drawer>
      <Flex flexDirection={"column"} width={"100%"}>
        <TopNav
          firstName={firstName}
          lastName={lastName}
          disclosure={{ isOpen, onOpen, onClose }}
        />
        <Flex flex={1} bg={"blackAlpha.50"} height={"100vh"}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
