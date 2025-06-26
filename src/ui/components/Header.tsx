import { Box, Heading, Flex, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { getUserCookieValue } from '@/lib/cookies';
import { deliusSwashCaps } from '@/ui/fonts'
import UserInfo from './UserInfo';
;

export default async function Header() {
  const userInfo = await getUserCookieValue();
  const {username, jobTitle} = userInfo || {};

  return (
    <Box
      as="header"
      bg="purple.100" 
      boxShadow="sm"
      position="sticky"
      zIndex="sticky"
      top={0}
      px={6}
      py={4}
    >
      <Flex align="center" justify="space-between">
        <Stack gap={0} direction="row" align={"center"}>
          <Box position="relative" boxSize={{ base: '48px', md: '80px' }}>
            <Image
              src="/logo.png"
              alt="Anime Grid Logo"
              fill
              sizes="(max-width: 480px) 48px, (max-width: 768px) 64px, 80px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
          <Heading
            className={`${deliusSwashCaps.className}`}
            fontSize={{ base: '1xl', md: '4xl', lg: '5xl' }}
            color={"purple.700"}
          >
            Anime Grid
          </Heading>
        </Stack>
        <UserInfo username={username} jobTitle={jobTitle} />
      </Flex>
    </Box>
  )
}