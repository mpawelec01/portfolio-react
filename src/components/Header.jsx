import {
  useColorMode,
  Flex,
  Heading,
  Spacer,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaLinkedin, FaGithub } from "react-icons/fa";
import { HashLink, HashLink as Link } from "react-router-hash-link";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const scrollSmoothTo = (elementId) => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <Flex
      position="sticky"
      top="0"
      left="0"
      p="5"
      alignItems="center"
      w="100%"
      maxW="1000px"
      bgColor={isDark ? "gray.800" : "white"}
      zIndex="9"
      borderBottom="2px solid"
      borderBottomColor={isDark ? "white" : "gray.800"}
    >
      <Heading
        name="top"
        ml="8"
        size="md"
        fontWeight="semibold"
        color="#930C39"
      >
        im-mp
      </Heading>
      <Spacer></Spacer>
      <Flex gap={12}>
        <Link onClick={() => scrollSmoothTo("home")}>
          <Text _hover={{ color: "#930C39", fontWeight: "bold" }}> Home</Text>
        </Link>
        <Link onClick={() => scrollSmoothTo("technologies")}>
          <Text _hover={{ color: "#930C39", fontWeight: "bold" }}>
            Technologies
          </Text>
        </Link>
        <Link onClick={() => scrollSmoothTo("projects")}>
          <Text _hover={{ color: "#930C39", fontWeight: "bold" }}>
            Projects
          </Text>
        </Link>
        <Link onClick={() => scrollSmoothTo("aboutme")}>
          <Text _hover={{ color: "#930C39", fontWeight: "bold" }}>
            About me
          </Text>
        </Link>
        <Link onClick={() => scrollSmoothTo("contact")}>
          <Text _hover={{ color: "#930C39", fontWeight: "bold" }}>Contact</Text>
        </Link>
      </Flex>
      <Spacer></Spacer>
      <Link
        target="_blank"
        to="https://www.linkedin.com/in/mateusz-pawelec-140b7321a/"
      >
        <IconButton
          ml={2}
          icon={<FaLinkedin />}
          isRound="true"
          title="Linkedin profile"
        ></IconButton>
      </Link>
      <Link target="_blank" to="https://github.com/mpawelec01">
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          title="Github profile"
        ></IconButton>
      </Link>
      <IconButton
        ml={8}
        icon={isDark ? <FaSun /> : <FaMoon />}
        title={isDark ? "Go light" : "Go dark"}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
};
