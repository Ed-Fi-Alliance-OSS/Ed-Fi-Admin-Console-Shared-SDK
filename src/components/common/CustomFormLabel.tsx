import { Box } from "@chakra-ui/react"

interface CustomFormLabelProps {
    htmlFor: string
    id?: string
    text: string
}

const labelStyles = {
    fontFamily: 'Poppins',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '20px',
}

const CustomFormLabel = ({ htmlFor, text, id }: CustomFormLabelProps) => {
    return (
        <label id={id} htmlFor={htmlFor}>
          <Box style={labelStyles}>
            {text}
          </Box>
        </label>

    )
}

export default CustomFormLabel
