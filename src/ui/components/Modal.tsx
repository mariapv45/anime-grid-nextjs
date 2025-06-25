import { CloseButton, Dialog, Portal } from "@chakra-ui/react"

type Props = {
  title: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export default function Modal({
  title,
  trigger,
  children,
}: Props) {
  return (
    <Dialog.Root size="md" placement="center" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body>
              {children}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
