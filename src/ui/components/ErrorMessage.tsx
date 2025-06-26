import { Alert } from "@chakra-ui/react";

type Props = {
  error: Error;
};

export default function ErrorMessage({ error }: Props) {
  return (
    <Alert.Root status="error" maxW="6xl" w="100%" mx="auto" my={50} px={{ base: 4, md: 6 }} py={8} borderRadius="md">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Error loading data</Alert.Title>
        <Alert.Description>
          {error.message}
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
}