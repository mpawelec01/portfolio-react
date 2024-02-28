import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaHome, FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <Stack scrollMarginTop="90px" id="projects" mt="45">
      <Heading mt="25" mb="8">
        Projects
      </Heading>

      <SimpleGrid columns="3" spacing="20px">
        <Box
          borderRadius="8px"
          boxShadow="8px 8px 24px 0px rgba(66, 68, 90, 1)"
          maxW="320px"
        >
          <Image src="cv-project.jpg" alt="cv-project" />
          <Box p="10px 15px">
            <Text fontWeight="bold">THIS PROJECT</Text>
            <Text fontSize="12">React, Chakra UI, FormSpree</Text>
            <Flex justify="flex-end" mt="12">
              <Link
                target="_blank"
                href="https://github.com/mpawelec01/portfolio-react"
              >
                <IconButton
                  ml={2}
                  icon={<FaGithub />}
                  isRound="true"
                  title="View code"
                ></IconButton>
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box
          borderRadius="8px"
          boxShadow="8px 8px 24px 0px rgba(66, 68, 90, 1)"
          maxW="320px"
        >
          <Image src="backend-app.jpg" alt="figma-project" />
          <Box p="10px 15px">
            <Text fontWeight="bold">BACKEND CRUD REST API APP</Text>
            <Text fontSize="12">
              NodeJS, Express, MongoDB, Mongoose, SendGrid
            </Text>
            <Flex justify="flex-end" mt="12">
              <Link
                target="_blank"
                href="https://github.com/mpawelec01/NODE-REST_API"
              >
                <IconButton
                  ml={2}
                  icon={<FaGithub />}
                  isRound="true"
                  title="View code"
                ></IconButton>
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box
          borderRadius="8px"
          boxShadow="8px 8px 24px 0px rgba(66, 68, 90, 1)"
          maxW="320px"
        >
          <Image src="phonebook-manager.jpg" alt="phonebook-manager" />
          <Box p="10px 15px">
            <Text fontWeight="bold">PHONEBOOK MANAGER</Text>
            <Text fontSize="12">React, Redux, Chakra UI</Text>
            <Flex justify="flex-end" mt="12">
              <Link
                target="_blank"
                href="https://mpawelec01.github.io/goit-react-hw-08-phonebook/"
              >
                <IconButton
                  ml={2}
                  icon={<FaHome />}
                  isRound="true"
                  title="View site"
                ></IconButton>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/mpawelec01/goit-react-hw-08-phonebook"
              >
                <IconButton
                  ml={2}
                  icon={<FaGithub />}
                  isRound="true"
                  title="View code"
                ></IconButton>
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box
          borderRadius="8px"
          boxShadow="8px 8px 24px 0px rgba(66, 68, 90, 1)"
          maxW="320px"
        >
          <Image src="bookshelf.jpg" alt="bookshelf" />
          <Box p="10px 15px">
            <Text fontWeight="bold">
              BOOKSHELF - GROUP PROJECT DURING THE COURSE (participated as Scrum
              Master and DEV)
            </Text>
            <Text fontSize="12">HTML, CSS(SCSS), JavaScript</Text>
            <Flex justify="flex-end">
              <Link
                target="_blank"
                href="https://gointoorbit.github.io/goit-project-js-group-2/"
              >
                <IconButton
                  ml={2}
                  icon={<FaHome />}
                  isRound="true"
                  title="View site"
                ></IconButton>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/gointoorbit/goit-project-js-group-2"
              >
                <IconButton
                  ml={2}
                  icon={<FaGithub />}
                  isRound="true"
                  title="View code"
                ></IconButton>
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box
          borderRadius="8px"
          boxShadow="8px 8px 24px 0px rgba(66, 68, 90, 1)"
          maxW="320px"
        >
          <Image src="weather-app.jpg" alt="weather-app" />
          <Box p="10px 15px">
            <Text fontWeight="bold">WEATHER APP</Text>
            <Text fontSize="12">HTML, CSS, JavaScript</Text>
            <Flex justify="flex-end" mt="12">
              <Link
                target="_blank"
                href="https://mpawelec01.github.io/weather-app/"
              >
                <IconButton
                  ml={2}
                  icon={<FaHome />}
                  isRound="true"
                  title="View site"
                ></IconButton>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/mpawelec01/weather-app"
              >
                <IconButton
                  ml={2}
                  icon={<FaGithub />}
                  isRound="true"
                  title="View code"
                ></IconButton>
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box
          borderRadius="8px"
          boxShadow="8px 8px 24px 0px rgba(66, 68, 90, 1)"
          maxW="320px"
        >
          <Image src="ice-cream.jpg" alt="ice-cream" />
          <Box p="10px 15px">
            <Text fontWeight="bold">
              ICE CREAM - GROUP PROJECT DURING THE COURSE (participated as Team
              Leader and DEV)
            </Text>
            <Text fontSize="12">HTML, CSS(SCSS), JavaScript</Text>
            <Flex justify="flex-end">
              <Link
                target="_blank"
                href="https://mpawelec01.github.io/project_grupa_06/"
              >
                <IconButton
                  ml={2}
                  icon={<FaHome />}
                  isRound="true"
                  title="View site"
                ></IconButton>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/mpawelec01/project_grupa_06"
              >
                <IconButton
                  ml={2}
                  icon={<FaGithub />}
                  isRound="true"
                  title="View code"
                ></IconButton>
              </Link>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
      <Box
        h="1"
        mt="20"
        bgGradient="linear(to-r, #930C39,#4C061D)"
        w="100%"
      ></Box>
    </Stack>
  );
};
