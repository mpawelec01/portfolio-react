import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export const AboutMe = () => {
  return (
    <Stack
      scrollMarginTop="100px"
      id="aboutme"
      w="100%"
      maxW="1000px"
      spacing="5"
      mt="25"
      mb="10"
    >
      <Heading>About me</Heading>
      <Box border="3px ridge black" p="10px 15px" maxW="600">
        <Heading fontSize={22} mb="5">
          EDUCATION
        </Heading>
        <Box>
          <Text mb="2">
            Military University of Technology in Warsaw (civil studies) -
            electronics 1 year{" "}
          </Text>
          <Text mb="2">
            Sound Realization Academy in Warsaw - sound engineer 1 year
          </Text>
          <Text mb="2">
            Build Your Social Media Agency - 6 months course by Henrick Media
          </Text>
          <Text mb="2">
            For couple of months i was studying JavaScript on my own
          </Text>
          <Text>Full Stack Developer - 10 months GOIT course</Text>
        </Box>
      </Box>
      <Box
        border="3px ridge black"
        p="10px 15px"
        alignSelf="flex-end"
        maxW="700"
      >
        <Heading fontSize={22} mb="5">
          WORK EXPERIENCE
        </Heading>
        <Text>
          For a year, I had been running remote digital marketing agency,
          helping local businesses to increase recognition and sales through
          advertising campaigns on Facebook.
          <br /> I independently went through all stages, starting from sales
          conversations with customers, creating advertising materials,
          programming ChatBot for automatic replies and creating and optimizing
          advertising campaigns to ensure the best possible results.
        </Text>
      </Box>
      <Box border="3px ridge black" p="10px 15px" maxW="700">
        <Heading fontSize={22} mb="5">
          SOFT SKILLS
        </Heading>
        <Box>
          <Text mb="3">
            My mind is full of concepts. I am very quick learner. There is no
            problem for me, to find a solution to any task and carefully search
            for tools to achieve it.
          </Text>
          <Text mb="3">
            I benefit a lot from constructive criticism and I am open to advice
            from others.
          </Text>
          <Text mb="3">
            Other people describe me as a very communicate person. However I
            work well both alone and in a team where I can take the initiative
            to manage it.
          </Text>

          <Text>
            I speak Polish as a native language. My English is at an advanced
            level, both as written and spoken.
          </Text>
        </Box>
      </Box>
      <Box
        border="3px ridge black"
        p="10px 15px"
        alignSelf="flex-end"
        maxW="700"
      >
        <Heading fontSize={22} mb="5">
          HOBBIES
        </Heading>
        <Text>
          My passion is to create, design and learn new thins, besides I do
          enjoy sport activities such a running, gym or rollerblading.
        </Text>
        <Text mt="2">
          {" "}
          Lately I am into psychology books. Also in free time I love producing
          music.
        </Text>
      </Box>
    </Stack>
  );
};
