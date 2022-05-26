import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { FocusableElement } from "@chakra-ui/utils";
import { ReactElement, ReactNode, RefObject } from "react";

interface PopUpProps {
  children: ReactNode;
  initialFocusRef: RefObject<FocusableElement>;
  header: ReactElement | string;
  body: ReactElement | string;
}

export function PopUp({
  children,
  initialFocusRef,
  header,
  body,
}: PopUpProps): JSX.Element {
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        color="gray.700"
        bg="white"
        borderColor="gray.300"
        mr="10px"
      >
        <PopoverArrow
          bg="white"
          borderTop="1px"
          borderLeft="1px"
          borderColor="gray.300"
        />
        <PopoverCloseButton />
        <PopoverHeader
          pt={4}
          fontWeight="bold"
          border="1"
          borderColor="gray.300"
        >
          {header}
        </PopoverHeader>
        <PopoverBody textAlign="left">{body}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
