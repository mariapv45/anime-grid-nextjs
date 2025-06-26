import { Box, Text, Flex } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" py={4} px={6} bg="purple.100" mt="auto">
      <Flex justify="center" align="center">
        <Text fontSize="sm" color="gray.600">
          Challenge Version 3.5 · © {new Date().getFullYear()} LeonardoAI
        </Text>
      </Flex>
    </Box>
  );
}