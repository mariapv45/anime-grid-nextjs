'use client';

import Image from "next/image";
import { Flex, Card, Box } from "@chakra-ui/react";
import { deliusSwashCaps } from "@/ui/fonts";
import UserForm from "@/ui/components/UserForm";

export default function Home() {
  return (
    <Flex minH="100vh" width="100vw" align="center" justify="center">
       <Card.Root maxW={{ base: "sm", md: "md" }} p={{ base: 2, md: 8 }}>
        <Card.Header>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxW={{ base: "100px", md: "150px" }}
            mx="auto"
            mb={4}
          >
            <Image
              src="/welcome.png"
              alt="Anime Grid logo"
              width={200}
              height={200}
              sizes="(max-width: 768px) 100px, 150px"
            />
          </Box>
          
          <Card.Title
            className={`${deliusSwashCaps.className}`}
            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
            color={"purple.700"}
            mb={10}
            textAlign="center"
          >
            Welcome!
          </Card.Title>
          
          <Card.Description>
            Please enter a username and job title to begin your anime journey. 
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <UserForm />
        </Card.Body>
      </Card.Root>
    </Flex>
  );
}
