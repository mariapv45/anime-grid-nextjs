import { Box, Heading, Flex, HStack, Stack, Avatar, Text } from '@chakra-ui/react'
import { getUserCookieValue } from '@/lib/cookies'
import Modal from './Modal';
import UserForm from './UserForm';

export async function Header() {
  const userInfo = await getUserCookieValue();
  const {username, jobTitle} = userInfo || {};

  return (
    <Box as="header" py={4} px={6} bg="gray.100" boxShadow="sm">
      <Flex align="center" justify="space-between">
        <Heading size="lg">Leonardo AI Web Challenge</Heading>
        <HStack gap="3">
          <Avatar.Root>
            <Avatar.Fallback />
            <Modal
              title="Edit Profile"
              trigger={
                <Avatar.Image src="/profile-avatar.png" cursor="pointer" />
              }
            >
              <UserForm buttonLabel="Save" username={username} jobTitle={jobTitle} />
            </Modal>
            
          </Avatar.Root>
          {!!username && !!jobTitle && (
            <Stack gap="0">
              <Text fontWeight="medium">{username}</Text>
              <Text color="fg.muted" textStyle="sm">
                {jobTitle}
              </Text>
            </Stack>
          )}
        </HStack>
      </Flex>
    </Box>
  )
}