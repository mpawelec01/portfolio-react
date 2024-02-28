import { Icon, HStack, Heading, Stack, Center } from "@chakra-ui/react";
import {
  FaJs,
  FaReact,
  FaCss3,
  FaHtml5,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";
import { SiChakraui, SiTailwindcss } from "react-icons/si";

export const Technologies = () => {
  return (
    <Stack scrollMarginTop="110px" id="technologies" mt="-20">
      <Center alignSelf="flex-start">
        <Heading mb="8">Technologies</Heading>
      </Center>

      <HStack spacing="24">
        <Icon
          _hover={{ fill: "#930C39" }}
          title="HTML5"
          cursor="pointer"
          as={FaHtml5}
          boxSize="35"
        />
        <Icon
          _hover={{ fill: "#930C39" }}
          title="CSS3"
          cursor="pointer"
          as={FaCss3}
          boxSize="35"
        />
        <Icon
          _hover={{ fill: "#930C39" }}
          title="SASS"
          cursor="pointer"
          as={FaSass}
          boxSize="35"
        />
        <Icon
          _hover={{ fill: "#930C39" }}
          title="JavaScript"
          cursor="pointer"
          as={FaJs}
          boxSize="35"
        />
        <Icon
          _hover={{ fill: "#930C39" }}
          title="React"
          cursor="pointer"
          as={FaReact}
          boxSize="35"
        />
        <Icon
          _hover={{ fill: "#930C39" }}
          title="Chakra UI"
          cursor="pointer"
          as={SiChakraui}
          boxSize="35"
        />
        <Icon
          _hover={{ fill: "#930C39" }}
          title="Tailwind CSS"
          cursor="pointer"
          as={SiTailwindcss}
          boxSize="35"
        />
        <Icon
          _hover={{ fill: "#930C39" }}
          title="Node JS"
          cursor="pointer"
          as={FaNodeJs}
          boxSize="35"
        />
      </HStack>
    </Stack>
  );
};
