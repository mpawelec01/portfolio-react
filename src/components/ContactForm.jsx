import {
  Box,
  Button,
  Center,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mleqjrjv");
  if (state.succeeded) {
    return (
      <Center mt="170" mr="100">
        <Text fontSize="24">Thanks for contact!</Text>
      </Center>
    );
  }
  return (
    <Box maxW="400px" mt="5" mb="10">
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" type="text" defaultValue="" name="name" mb="5" />
        <ValidationError prefix="Name" field="name" error={state.errors} />
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" defaultValue="" name="email" mb="5" />
        <ValidationError prefix="Email" field="email" error={state.errors} />
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea id="message" defaultValue="" name="message" mb="5" />
        <ValidationError
          prefix="Message"
          field="message"
          erorrs={state.errors}
        />
        <Button type="submit" disabled={state.submitting}>
          Send message
        </Button>
        {/* {state.succeeded && (
          <Center mt="5">
            <Text fontSize="24">Thanks for contact!</Text>
          </Center>
        )} */}
      </form>
    </Box>
  );
};
