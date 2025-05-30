import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useStyleConfig } from "@chakra-ui/system";

export type ErrorStatus = "403" | "404" | "500" | "503";

interface ErrorStatusMessagesInterface {
  title: string;
  description: string;
  additionalDescription?: string;
}

const errorStatusMessages: { [key: string]: ErrorStatusMessagesInterface } = {
  "403": {
    title: "Forbidden",
    description: "You don't have permission to access this page.",
  },
  "404": {
    title: "Page Not Found",
    description: "Sorry, the page you were looking for could not be found.",
  },
  "500": {
    title: "Internal Server Error",
    description: "An error has occurred.",
    additionalDescription: "Try again in a few minutes.",
  },
  "503": {
    title: "This service is currently unavailable",
    description: "Sorry for the inconvenience.",
    additionalDescription:
      "Access our support resources to learn more or try again later.",
  },
};

interface EDXErrorPageProps {
  errorStatus: ErrorStatus;
  height: string;
  minHeight: string;
  width: string;
  minWidth: string;
  primaryButtonLabel: string;
  primaryButtonBackUrl: string;
  secondaryButtonLabel?: string;
  secondaryButtonBackUrl?: string;
}

const EDXErrorPage = ({
  errorStatus,
  height,
  minHeight,
  width,
  minWidth,
  primaryButtonLabel,
  primaryButtonBackUrl,
  secondaryButtonLabel,
  secondaryButtonBackUrl,
}: EDXErrorPageProps) => {
  const styles = useStyleConfig("EDXErrorPageTheme");

  const { title, description, additionalDescription } =
    errorStatusMessages[errorStatus];

  return (
    <Flex css={styles} h={height} minH={minHeight} w={width} minW={minWidth}>
      <Flex className="content-container">
        <Box className="error-code-container">
          <Text>ERROR {errorStatus}</Text>
        </Box>

        <Box className="error-title-container">
          <Text>{title}</Text>
        </Box>

        <Box className="error-description">
          <Text>{description}</Text>
        </Box>

        {additionalDescription && (
          <Box className="error-description">
            <Text>{additionalDescription}</Text>
          </Box>
        )}

        <Flex className="buttons-container">
          {secondaryButtonLabel && secondaryButtonBackUrl && (
            <Button
              as="a"
              ref={secondaryButtonBackUrl}
              size="md"
              className="secondary-button"
              color={"secondaryBlue600"}
              variant="outline" // Updated to fit V3 styling
            >
              {secondaryButtonLabel}
            </Button>
          )}

          <Button
            as="a"
            ref={primaryButtonBackUrl}
            size="md"
            className="primary-button"
            color={"primaryBlue600"}
            variant={"solid"} // Changed from primaryBlue600
          >
            {primaryButtonLabel}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EDXErrorPage;
