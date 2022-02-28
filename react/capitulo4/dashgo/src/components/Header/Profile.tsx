import { Avatar, Box, Flex, Text, } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Andrade</Text>
          <Text color="gray.300" fontSize="small">
            flpandrade2011@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Felipe Andrade" src="https://github.com/felipeAndrade04.png" />
    </Flex>
  );
}