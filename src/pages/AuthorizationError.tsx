import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { useStyleConfig } from "@chakra-ui/system";

interface AuthorizationErrorPageProps {
  backUrl: string;
  primaryButtonLabel: string;
}

const AuthorizationErrorPage = ({
  backUrl,
  primaryButtonLabel,
}: AuthorizationErrorPageProps) => {
  const styles = useStyleConfig("EDXErrorPageTheme");
  return (
    <Flex className="authorization-error-container" style={styles as React.CSSProperties}>
      <Flex className="content-container">
        <Box className="error-code-container">
          <Text fontWeight="700">
            You do not have permissions to access this page.
          </Text>
        </Box>
        <Box className="error-description">
          <Text>
            If you think this is an error, contact your System Administrator.
          </Text>
        </Box>
        <Flex className="buttons-container">
          <Link href={backUrl} _hover={{ textDecoration: 'none' }}>
            <Button
              size="md"
              className="primary-button"
              variant="solid"
              color="primaryBlue600"
              colorScheme="blue"
            >
              {primaryButtonLabel}
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AuthorizationErrorPage;
