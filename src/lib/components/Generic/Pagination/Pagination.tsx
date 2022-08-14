import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { chakra, useColorModeValue, Icon, Flex, Box } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

const PagButton = (props: any) => {
    const activeStyle = {
        // bg: "brand.200",
        _dark: {
            bg: "brand.500",
        },

        color: "white",
    };
    const customActiveStyle = {
        bg: "brand.600",
        borderRadius: "full",
        w: "25px",
        h: "25px",
        color: "black",
    };
    return (
        <chakra.button
            // mx={1}
            px={4}
            py={2}
            rounded="md"
            // bg="white"
            _dark={{
                bg: "gray.800",
            }}
            color="brand.700"
            opacity={props.disabled && 0.6}
            _hover={!props.disabled && activeStyle}
            cursor={props.disabled && "not-allowed"}
            {...(props.active && activeStyle)}
        >
            <Box {...(props.active && customActiveStyle)}>{props.children}</Box>
        </chakra.button>
    );
};

const MButton = (props: any) => {
    const DoubleArrow = props.left ? ArrowLeftIcon : ArrowRightIcon;
    const [hovered, setHovered] = React.useState(false);
    const hoverColor = useColorModeValue("brand.800", "brand.700");
    const unHoverColor = useColorModeValue("brand.100", "brand.200");
    return (
        <chakra.a
            w={8}
            py={2}
            color="brand.900"
            _dark={{
                color: "gray.200",
            }}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            cursor="pointer"
            textAlign="center"
        >
            {hovered ? (
                <Icon
                    as={DoubleArrow}
                    boxSize={3}
                    cursor="pointer"
                    color={hoverColor}
                />
            ) : (
                <Icon
                    as={HiDotsHorizontal}
                    color={unHoverColor}
                    boxSize={4}
                    opacity={0.5}
                />
            )}
        </chakra.a>
    );
};

export default function Pagination() {
    return (
        <Flex
            // bg="#edf3f8"
            _dark={{
                bg: "#3e3e3e",
            }}
            // p={50}
            // w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Flex>
                <PagButton>
                    <Icon
                        as={IoIosArrowBack}
                        color="brand.700"
                        _dark={{
                            color: "gray.200",
                        }}
                        boxSize={4}
                    />
                </PagButton>
                <PagButton active="true">1</PagButton>
                <PagButton>2</PagButton>
                <PagButton>3</PagButton>
                <MButton />
                <PagButton>8</PagButton>
                <PagButton>9</PagButton>
                <PagButton>10</PagButton>
                <PagButton>
                    <Icon
                        as={IoIosArrowForward}
                        color="brand.700"
                        _dark={{
                            color: "gray.200",
                        }}
                        boxSize={4}
                    />
                </PagButton>
            </Flex>
        </Flex>
    );
}
