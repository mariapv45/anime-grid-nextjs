import { Box, Text, AspectRatio } from "@chakra-ui/react"
import Image from "next/image"

type Props = {
  coverImage: string;
  title: string;
}

export default function AnimeTile({
  coverImage,
  title,
}: Props) {
  return (
    <Box borderRadius={4} p={2} _hover={{ boxShadow: "lg" }}>
      <AspectRatio ratio={2/3}>
        <Image
          src={coverImage}
          alt={title}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
          style={{ borderRadius: "4px" }}
        />
      </AspectRatio>
      <Text mt={2} fontSize="md" fontWeight="bold">
        {title}
      </Text>
    </Box>
  )
}
