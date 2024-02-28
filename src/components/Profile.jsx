import { Flex, useMediaQuery } from "@chakra-ui/react";

export const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxW={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      Profile
    </Flex>
  );
};
