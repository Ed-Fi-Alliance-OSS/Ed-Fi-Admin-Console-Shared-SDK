import { Container, Box } from '@chakra-ui/react';
import { keyframes } from "@emotion/react";


export default function App() {
  const dizzyAnimation = keyframes`
  0% { transform: scale(1) rotate(0deg); border-radius: 20%; }
  25% { transform: scale(2) rotate(0deg); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0deg); border-radius: 20%; }
`;

  return (
    <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box
        animation={`${dizzyAnimation} 3s ease-in-out infinite alternate`}
        padding="2"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
        borderRadius="20%"
      >
        I'm Dizzy!
      </Box>
    </Container>
  )
}
