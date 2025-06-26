import { SimpleGrid, Box, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function LoadingSkeleton() {
  return (
    <Box maxW="6xl" w="100%" mx="auto" px={{ base: 4, md: 6 }} py={8}>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={{ base: 4, md: 6 }}>
        {Array.from({ length: 36 }).map((_, i) => (
          <Box key={i} borderRadius="md" overflow="hidden" p={2}>
            <Skeleton height="230px" borderRadius="md" />
            <SkeletonText mt="4" noOfLines={1} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}