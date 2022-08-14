import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  Link,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Switch,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { FiBell, FiMenu } from "react-icons/fi";
import { IDisclosureProps } from "../appLayout";

interface ITopNav {
  firstName: string;
  lastName: string;
  disclosure: IDisclosureProps;
}

export const TopNav: FC<ITopNav> = ({ firstName, lastName, disclosure }) => (
  <Flex h={"84"} w={"100%"} bg={"white"} alignItems={"end"} boxShadow={"sm"}>
    <Flex
      borderBottom={"1px"}
      borderColor={"gray.200"}
      // boxShadow={"sm"}
      flex={"1"}
      flexDirection={"row"}
      h={"84"}
      alignItems={"end"}
      justifyContent={"space-between"}
      mx={8}
    >
      <IconButton
        display={{ base: "flex", md: "flex", lg: "none" }}
        onClick={disclosure.onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Box display={{ base: "none", md: "none", lg: "flex" }}>
        <Text>Today: {new Date().toDateString()}</Text>
      </Box>
      <Box>
        <Flex pb={4}>
          <Flex
            alignItems={"center"}
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            <Switch size="md" colorScheme="brand" defaultChecked />
            <Text ml={3}>Live</Text>
          </Flex>
          {/* <FiBell size={24} color={"#767171"} /> */}
          <Box>
            <Menu>
              <MenuButton
                px={4}
                // py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="0"
                border={"none"}
                _hover={{ bg: "transparent" }}
                _expanded={{ bg: "transparent" }}
                _focus={{ boxShadow: "none" }}
                fontSize={{ base: "xs", md: "md" }}
              >
                Welcome back, Ada! <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>New File</MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuDivider />
                <MenuItem>Open...</MenuItem>
                <MenuItem>Save File</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Menu>
            <MenuButton
              px={4}
              // py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="0"
              border={"none"}
              _hover={{ bg: "transparent" }}
              _expanded={{ bg: "transparent" }}
              _focus={{ boxShadow: "none" }}
              fontSize={{ base: "xs", md: "md" }}
            >
              En <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Fr</MenuItem>
              <MenuItem>Chi</MenuItem>
              <MenuItem>Ukr</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Flex>
  </Flex>
);
