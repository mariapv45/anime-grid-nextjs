'use client';

import { useActionState} from "react";
import { Button, Field, Input, Stack } from "@chakra-ui/react";

import { setUserCookie } from "@/lib/actions";
import type { State } from "@/lib/actions";

type Props = {
  buttonLabel?: string;
  username?: string;
  jobTitle?: string;
}

export default function UserForm({
  buttonLabel = "Continue",
  username,
  jobTitle
}: Props) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(setUserCookie, initialState);

  // Each field only returns a single validation error, so we extract the first (and only) message
  // If no error exists, fallback to null
  const userNameError = state?.errors?.username?.[0] ?? null;
  const jobTitleError = state?.errors?.jobTitle?.[0] ?? null;

  return (
    <form action={formAction}>
      <Stack gap={4} align="flex-start" w="xs" maxW="md">
        <Stack gap={4} w="xs">
          <Field.Root invalid={!!userNameError}>
            <Field.Label>Username</Field.Label>
            <Input
              name="username"
              type="text"
              defaultValue={username}
              placeholder="Enter your username"
            />
            <Field.ErrorText>{userNameError}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!jobTitleError}>
            <Field.Label>Job Title</Field.Label>
            <Input
              name="jobTitle"
              type="text"
              defaultValue={jobTitle}
              placeholder="Enter your job title"
            />
            <Field.ErrorText>{jobTitleError}</Field.ErrorText>
          </Field.Root>
        </Stack>

        <Button alignSelf="flex-end" type="submit" colorPalette={"purple"}>{buttonLabel}</Button>
      </Stack>
    </form>
  );
}