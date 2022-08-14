import { ArrowLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Button,
  ComponentWithAs,
  Flex,
  Icon,
  IconProps,
  Text,
} from "@chakra-ui/react";
import { menuItems, menuItems2, menuItems3 } from "data/SideNavData";

import * as React from "react";
import { IDisclosureProps } from "../appLayout";
import { LogoComponent } from "../assets";
import { SideNavItem } from "./sideNavItems";

export interface ISideNavProps extends BoxProps {
  currentRoute: string;
  disclosure: IDisclosureProps;
}

export interface IMenuItem {
  name: string;
  route: string;
  icon: ComponentWithAs<"svg", IconProps>;
}

export const SideNav: React.FC<ISideNavProps> = ({
  currentRoute,
  disclosure,
  ...rest
}) => {
  return (
    <Flex
      minH={"100vh"}
      direction="column"
      w={{ base: "full", md: "280px" }}
      bg={"brand.400"}
      borderColor={"brand.400"}
      justifyContent={"space-between"}
      {...rest}
    >
      <Box>
        <Flex direction={"column"} pt={"12"} pl={"12"}>
          <a href="/">
            <LogoComponent fill={"black"} />
          </a>
        </Flex>
        <Flex direction={"column"} mt={"10"} pl={"12"}>
          <Text fontWeight="bold" fontSize={"medium"} color="brand.100">
            Main pages
          </Text>
          {menuItems.map((item, index) => (
            <SideNavItem
              key={index}
              name={item.name}
              route={item.route}
              currentRoute={currentRoute}
            >
              <Icon
                as={item.icon}
                _hover={{
                  color: `${
                    currentRoute == `${item.route}` ? "white" : "brand.200"
                  }`,
                }}
                color={`${
                  currentRoute == item.route ? "brand.200" : "brand.300"
                }`}
              />
            </SideNavItem>
          ))}
        </Flex>
        <Flex direction={"column"} mt={"10"} pl={"12"}>
          <Text fontWeight="bold" fontSize={"medium"} color="brand.100">
            Accept Payments
          </Text>
          {menuItems2.map((item, index) => (
            <SideNavItem
              key={index}
              name={item.name}
              route={item.route}
              currentRoute={currentRoute}
            >
              <Icon
                as={item.icon}
                color={`${
                  currentRoute == item.route ? "brand.200" : "brand.300"
                }`}
              />
              {/* <FiGrid
                            color={`${
                                currentRoute == "dashboard"
                                    ? "#EF2C5A"
                                    : "#000000"
                            }`}
                            size={"24px"}
                        /> */}
            </SideNavItem>
          ))}
        </Flex>
        <Flex direction={"column"} mt={"10"} pl={"12"}>
          <Text fontWeight="bold" fontSize={"medium"} color="brand.100">
            Send Payments
          </Text>
          {menuItems3.map((item, index) => (
            <SideNavItem
              key={index}
              name={item.name}
              route={item.route}
              currentRoute={currentRoute}
            >
              <Icon
                as={item.icon}
                color={`${
                  currentRoute == item.route ? "brand.200" : "brand.300"
                }`}
              />
              {/* <FiGrid
                            color={`${
                                currentRoute == "dashboard"
                                    ? "#EF2C5A"
                                    : "#000000"
                            }`}
                            size={"24px"}
                        /> */}
            </SideNavItem>
          ))}
        </Flex>
      </Box>
      <Box
        pb={"12"}
        pl={"12"}
        justifySelf={"end"}
        display={{ base: "flex", md: "flex", lg: "none" }}
      >
        <Button
          leftIcon={<ArrowLeftIcon />}
          colorScheme="brand"
          width="148px"
          variant="outline"
          borderColor="brand.300"
          color={"brand.300"}
          fontSize="12px"
          onClick={() => disclosure.onClose()}
          _hover={{
            color: "white",
            backgroundColor: "brand.200",
            borderColor: "white",
          }}
        >
          Hide Panel
        </Button>
      </Box>
    </Flex>
  );
};
