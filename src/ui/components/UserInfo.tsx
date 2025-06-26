import { Avatar, Button, HStack, Stack, Text } from '@chakra-ui/react';
import Modal from './Modal';
import UserForm from './UserForm';

type Props = {
  username?: string;
  jobTitle?: string;
}

export default function UserInfo({ username, jobTitle }: Props) {
  return (
    <HStack gap={3}>
      <Modal
        title="Edit Profile"
        trigger={
          <Avatar.Root
            as={Button}
            p={0}
            borderRadius="full"
            aria-label="Edit Profile"
            _hover={{ bg: 'purple.500'}}
          >
            <Avatar.Fallback />
            <Avatar.Image src="/profile-avatar.png" />
          </Avatar.Root>
        }
      >
        <UserForm
          buttonLabel="Save"
          username={username}
          jobTitle={jobTitle}
        />
      </Modal>

      {!!username && !!jobTitle && (
        <Stack gap={0} align="flex-start">
          <Text fontWeight="medium">{username}</Text>
          <Text fontSize="sm" color="fg.muted">
            {jobTitle}
          </Text>
        </Stack>
      )}
    </HStack>
  )
}
