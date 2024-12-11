import { Flex, FormControl, Text } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import CustomFormLabel from "../common/CustomFormLabel"
import CustomInput from "../common/CustomInput"

interface EdxUserInfo {
    email: string 
    firstName: string 
    lastName: string 
    organization: string 
    jobDepartment: string 
    jobTitle: string
}

interface UserInformationFormProps {
    userInfo: EdxUserInfo
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const UserInformationForm = ({ userInfo, onChange }: UserInformationFormProps) => {
    return (
        <Flex flexDir='column'>
            <Text
                fontFamily='Poppins'>
                    Edit your Exchange Profile Information below.
            </Text>
            <Flex flexDir='column' mt='32px' w='full'>
                <Text
                    fontFamily='Poppins'
                    fontWeight='700'
                    fontSize='20px'>User Information</Text>
                <FormControl mt='16px'>
                    <CustomFormLabel 
                        htmlFor="email"
                        text='Email' />
                    <Flex>
                        <CustomInput 
                            id="email"
                            value={userInfo.email}
                            onChange={onChange}
                            placeholder="your email" />
                        <Flex 
                            border='1px' 
                            borderColor='green.300' 
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            borderRadius='4px'
                            fontSize='12px'
                            color='green.700'
                            padding='0 5px'
                            ml='10px'>
                                Verified
                        </Flex>
                    </Flex>
                </FormControl>
                <FormControl mt='16px'>
                    <CustomFormLabel 
                        htmlFor="firstName"
                        text='First Name' />
                    <CustomInput 
                        id="firstName"
                        value={userInfo.firstName}
                        onChange={onChange}
                        placeholder="your email" />
                </FormControl>
                <FormControl mt='16px'>
                    <CustomFormLabel 
                        htmlFor="lastName"
                        text='Last Name' />
                    <CustomInput 
                        id="lastName"
                        value={userInfo.lastName}
                        onChange={onChange}
                        placeholder="your email" />
                </FormControl>
                <FormControl mt='16px'>
                    <CustomFormLabel 
                        htmlFor="organization"
                        text='Organization' />
                    <CustomInput 
                        id="organization"
                        value={userInfo.organization}
                        onChange={onChange}
                        placeholder="your email" />
                </FormControl>
                <FormControl mt='16px'>
                    <CustomFormLabel 
                        htmlFor="jobDepartment"
                        text='Job Department' />
                    <CustomInput 
                        id="jobDepartment"
                        value={userInfo.jobDepartment}
                        onChange={onChange}
                        placeholder="your job department" />
                </FormControl>
                <FormControl mt='16px'>
                    <CustomFormLabel 
                        htmlFor="jobTitle"
                        text='Job Title' />
                    <CustomInput 
                        id="jobTitle"
                        value={userInfo.jobTitle}
                        onChange={onChange}
                        placeholder="your job title" />
                </FormControl>
            </Flex>
        </Flex>
    )
}

export default UserInformationForm