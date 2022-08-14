import {
  Box,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Image,
} from "@chakra-ui/react";
import React from "react";

export default function SalesCard({
  icon,
  date,
  amount,
  time,
  theme,
}: {
  icon: string;
  date: string;
  amount: string;
  time: string;
  theme?: string;
}): JSX.Element {
  return (
    <Box
      border={"1px"}
      borderColor={"black"}
      borderRadius={"lg"}
      height={"240px"}
      width={["304px", "256px", "256px", "256px"]}
      mb={{ base: 6, md: 0 }}
      backgroundColor={theme ? theme : "white"}
    >
      <Stat pt={4} pl={"4"} color={theme == "black" ? "white" : "black"}>
        <StatHelpText fontSize={"sm"}>{date}</StatHelpText>
        <Image src={icon} mt={"8"} mb={"8"} width={{base: "80%"}}/>
        <StatLabel fontSize={"sm"}>This {time}</StatLabel>
        <StatNumber fontSize={"lg"} fontWeight="medium">
          {amount}
        </StatNumber>
      </Stat>
    </Box>
  );
}
