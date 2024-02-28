import {
  Center,
  Heading,
  HStack,
  Stack,
  Box,
  useColorMode,
} from "@chakra-ui/react";

export const HardSkills = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Stack mt="20">
      <Center alignSelf="flex-end">
        <Heading mb="8">Hard Skills</Heading>
      </Center>
      <HStack spacing="19">
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          REST API
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          React Hooks
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          Redux
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          {" "}
          React-router-DOM
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          CJS
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          Figma
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          Canva
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          RWD
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          BEM
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          SendGrid
        </Box>
      </HStack>
      <HStack mt="3" spacing="11.9">
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          npm
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          ES6
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          GIT
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          Express
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          Jest
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          Formspree
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          Mongoose
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          {" "}
          MongoDB
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          {" "}
          Docker
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          {" "}
          SQL
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          {" "}
          Webpack
        </Box>
        <Box
          p="2px 5px"
          borderColor={isDark ? "white" : "black"}
          borderStyle="solid"
          borderWidth="1px"
          borderRadius="5px"
          borderBottom="2px solid #930C39"
          borderRightColor="#4C061D"
        >
          {" "}
          Postman
        </Box>
      </HStack>
      <Box
        h="1"
        mt="10"
        bgGradient="linear(to-r, #930C39,#4C061D)"
        w="100%"
      ></Box>
    </Stack>
  );
};
