import { Box, Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
export interface ISideNavItem {
  route: string;
  currentRoute: string;
  name: string;
  children?: React.ReactNode;
}
export const SideNavItem: FC<ISideNavItem> = ({
  children,
  currentRoute,
  name,
  route,
}) => (
  <NextLink href={`/${route}`} passHref>
    {/* <Link _focus={{ outline: "none" }}> */}
    <Flex
      data-testid={`side-nav-item-${route}`}
      marginBottom={3}
      // bgColor={currentRoute == `${route}` ? "brand.100" : ""}
      // pl={6}
      borderRightRadius={"3xl"}
      position={"relative"}
      h={"12"}
      color={currentRoute == `${route}` ? "brand.200" : "brand.300"}
      _hover={{
        bg: `${currentRoute == `${route}` ? "white" : "blackAlpha.50"}`,
        bgColor: `${currentRoute == `${route}` ? "brand.200" : ""}`,
        color: `${currentRoute == `${route}` ? "white" : "brand.200"}`,
      }}
    >
      <Flex alignItems={"center"}>
        {children}
        <Box ml={"3"}>
          <Text
            as={"span"}
            // color={currentRoute == `${route}` ? "brand.200" : "brand.300"}
            // _hover={{
            //   color: `${currentRoute == `${route}` ? "white" : "brand.200"}`,
            // }}
            cursor={"pointer"}
          >
            {`${name}`}
          </Text>
        </Box>
      </Flex>
    </Flex>
    {/* </Link> */}
  </NextLink>
);
