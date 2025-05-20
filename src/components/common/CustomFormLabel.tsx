import { Box } from "@chakra-ui/react"

interface CustomFormLabelProps {
    htmlFor: string
    text: string
}

const labelStyles = {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '20px',
}

const CustomFormLabel = ({ htmlFor, text }: CustomFormLabelProps) => {
    return (
        <label htmlFor={htmlFor}>
          <Box style={labelStyles}>
            {text}
          </Box>
        </label>

    )
}

export default CustomFormLabel
