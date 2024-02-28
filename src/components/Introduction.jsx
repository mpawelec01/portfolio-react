import {
  Circle,
  Stack,
  useMediaQuery,
  Flex,
  Box,
  Text,
  Button,
  Image,
  Icon,
  keyframes,
} from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";

export const Introduction = () => {
  const animationKeyframes = keyframes`
 0%  { left: 0; opacity: 0; }
	5% {opacity: 0.0}
	48% {opacity: 0.2}
	80% {opacity: 0.0}
	100% { left: 82%}`;

  const animation = `${animationKeyframes} 2s infinite`;

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const scrollSmoothTo = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  return (
    <Stack scrollMarginTop="100px" id="home">
      <Circle
        position="absolute"
        right="22%"
        bg="#4C061D"
        mr="70"
        mt="30"
        opacity="0.2"
        w="250px"
        h="250px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        p={isNotSmallerScreen ? "32" : "0"}
        spacing="200px"
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
          <Text fontSize="25" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="50"
            fontWeight="bold"
            bgGradient="linear(to-r, #930C39,#4C061D)"
            bgClip="text"
          >
            Mateusz Pawelec
          </Text>

          <Text display="flex">
            Aspiring Full-Stack developer with a creative approach and
            willingness to learn new solutions{" "}
            <Icon ml="1" fill="gray" as={FaCode} boxSize="7" mr="2" />
          </Text>
          <Button onClick={() => scrollSmoothTo("contact")} mt="8">
            Contact me
            <Box
              position="absolute"
              opacity="0"
              top="0"
              left="0"
              width="15%"
              height="100%"
              transform="skew(-10deg, 0deg)"
              animation={animation}
              bg="linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.03) 1%,rgba(255,255,255,0.6) 30%,rgba(255,255,255,0.85) 50%,rgba(255,255,255,0.85) 70%,rgba(255,255,255,0.85) 71%,rgba(255,255,255,0) 100%)"
            ></Box>
          </Button>
        </Box>
        <Image
          alignSelf="center"
          zIndex="5"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="1g"
          boxSize="250px"
          objectFit="cover"
          opacity="0.9"
          src="profile-image.jpg"
        />
      </Flex>
    </Stack>
  );
};
