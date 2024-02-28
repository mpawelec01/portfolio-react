import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex
      id="contact"
      justifyContent="center"
      w="100%"
      minH="350px"
      p="10px 15px"
      bg={isDark ? "rgba(147, 12, 57, 0.1)" : "gray.400"}
    >
      <Flex alignItems="flex-start" justifyContent="space-between" w="1000px">
        <Box display="flex" flexDirection="column">
          <Heading mt="5" fontSize={40}>
            Contact
          </Heading>
          <Box mt="110">
            <Link href="mailto:m.pawelec01@gmail.com">
              M.PAWELEC01@GMAIL.COM
            </Link>
            <Box mt="5">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/mateusz-pawelec-140b7321a/"
              >
                <IconButton
                  icon={<FaLinkedin />}
                  isRound="true"
                  title="Linkedin profile"
                ></IconButton>
              </Link>
              <Link target="_blank" href="https://github.com/mpawelec01">
                <IconButton
                  ml={2}
                  icon={<FaGithub />}
                  isRound="true"
                  title="Github profile"
                ></IconButton>
              </Link>
            </Box>
          </Box>
        </Box>

        <ContactForm />
      </Flex>
      <Box
        id="end"
        h="1"
        mt="20"
        bgGradient="linear(to-r, #930C39,#4C061D)"
        w="100vh"
        position="absolute"
        bottom="10px"
      ></Box>
    </Flex>
  );
};
