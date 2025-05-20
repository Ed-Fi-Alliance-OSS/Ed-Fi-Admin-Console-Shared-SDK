import { defineStyleConfig } from "@chakra-ui/styled-system";

 const textAreaStylesConf = defineStyleConfig({
     baseStyle: {
         border: '1px solid',
         borderColor: 'gray.300',
         borderRadius: '4px',
         fontFamily: 'Poppins',
         fontWeight: 400,
         _disabled: {
             backgroundColor: 'gray.200',
             _placeholder: {
                 opacity: 1,
                 color: "gray.800"
             },
             opacity: 0.4,
         }
     },
     variants: {
         outline: {
             border: '1px solid',
             borderColor: 'gray.300',
             borderRadius: '4px',
             fontFamily: 'Poppins',
             fontWeight: 400,
             _disabled: {
                 backgroundColor: 'gray.200',
                 _placeholder: {
                     opacity: 1,
                     color: "gray.800"
                 },
                 opacity: 0.4,
             }
         }
     }
 }) as any;

 export default textAreaStylesConf;
