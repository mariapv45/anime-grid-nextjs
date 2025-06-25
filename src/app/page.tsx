import { Flex } from "@chakra-ui/react";
import UserForm from "@/ui/components/UserForm";

export default function Home() {
  return (
    <Flex minH="100vh" width="100vw" align="center" justify="center">
      <UserForm />
    </Flex>
  );
}
