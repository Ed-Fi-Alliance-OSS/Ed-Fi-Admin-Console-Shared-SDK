import { Button, Flex, Image, Text, Field } from "@chakra-ui/react"
import { Tag } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import { FormErrors } from "../../core/Forms.types"
import { TagsData } from "../../hooks/useUserProfileExtensions"
import { CompleteFormErrorMessage } from "../common"
import CustomErrorField from "../common/CustomErrorField"
import CustomFormLabel from "../common/CustomFormLabel"
import CustomInput from "../common/CustomInput"
import CustomTextArea from "../common/CustomTextArea"

interface EdxUserInfo {
    email: string
    firstName: string
    lastName: string
    organization: string
    jobDepartment: string
    jobTitle: string
}

interface EdxProfile {
    imageUrl: string
    additionalTitle: string
    bio: string
    tags: TagsData
}

interface ExchangeProfileFormProps {
    userInfo: EdxUserInfo
    exchangeProfile: EdxProfile
    isSavingExtensions: boolean
    errors: FormErrors
    isValidData: () => boolean
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeBio: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onChangeImage: () => void
    onAddTag: () => void
    onRemoveTag: (tagName: string) => void
}

const ExchangeProfileForm = ({ userInfo, exchangeProfile, errors, onInputChange, onChangeBio, onAddTag, onRemoveTag }: ExchangeProfileFormProps) => {
    return (
        <Flex flexDir='column' w='full'>
            <Text
                fontFamily='Poppins'
                fontWeight='700'
                fontSize='20px'>Exchange Profile</Text>
            { errors && Object.keys(errors).length > 0 && <CompleteFormErrorMessage /> }
            {false && <Flex flexDir='column' mt='16px' w='full'>
                <Text
                    fontFamily='Poppins'
                    fontWeight='700'>
                        Profile Image
                </Text>
                <Flex alignItems='center' mt='5px' w='full'>
                    <Flex
                        color='white'
                        bg='blue.500'
                        justifyContent='center'
                        fontFamily='Poppins'
                        fontSize='20px'
                        fontWeight='700'
                        alignItems='center'
                        borderRadius='full' h='50px' w='50px'>
                            {exchangeProfile.imageUrl?
                                <Image src={exchangeProfile.imageUrl} alt="user profile image" /> :
                                `${userInfo.firstName[0]}${userInfo.lastName[0]}`}
                    </Flex>
                    <Button
                        ml='10px'
                        variant="solid" 
                        color='secondaryBlue600'
                        w='150px'>
                            Upload Image
                    </Button>
                </Flex>
                <Text
                    color='gray.500'
                    fontFamily='Poppins'
                    fontStyle='italic'
                    mt='10px'
                    fontSize='xs'>
                        Your initials will be used as your profile image if you choose to not upload one here.
                </Text>
            </Flex>}
            <Field.Root mt='16px'>
                <CustomFormLabel
                    htmlFor="additionalTitle"
                    text='Additional Title, like "Basketball Coach"' />
                <CustomInput
                    id="additionalTitle"
                    error={errors && errors["additionalTitle"] && errors["additionalTitle"].message}
                    value={exchangeProfile.additionalTitle}
                    onChange={onInputChange}
                    placeholder="additional title" />
                <Text
                    color='gray.500'
                    fontFamily='Poppins'
                    fontStyle='italic'
                    mt='10px'
                    fontSize='xs'>
                        Maximum 100 characters
                </Text>
            </Field.Root>
            <Field.Root mt='16px'>
                <CustomFormLabel
                    htmlFor="bio"
                    text='Brief Intro Bio' />
                <CustomTextArea
                    id="bio"
                    value={exchangeProfile.bio}
                    error={errors && errors["bio"] && errors["bio"].message}
                    onChange={onChangeBio}
                    placeholder="your bio" />
                <Text
                    color='gray.500'
                    fontFamily='Poppins'
                    fontStyle='italic'
                    mt='10px'
                    fontSize='xs'>
                        Maximum 320 characters
                </Text>
            </Field.Root>
            <Field.Root mt='16px'>
                <CustomFormLabel
                    htmlFor="tags"
                    text='Tags for Skills and Areas of Interest' />
                 <CustomInput
                    id="tags"
                    value={exchangeProfile.tags.value}
                    error={errors && errors["tags"] && errors["tags"].message}
                    onChange={onInputChange}
                    onEnterKey={() => onAddTag()}
                    placeholder="additional tag" />
                <Flex mt={exchangeProfile.tags.tagsList.length > 0? "10px" : "0px"}>
                    {exchangeProfile.tags.tagsList.filter(tag => tag !== '').map((tag, index) =>
                        <Tag.Root bg="gray.200" key={index} _notFirst={{ ml: '3px' }}>
                            <Tag.Label>{tag}</Tag.Label>
                            <Tag.CloseTrigger
                                aria-label={`Remove ${tag} tag`}
                                onClick={() => onRemoveTag(tag)} />
                        </Tag.Root>
                    )}
                    {errors && errors["tagsList"] && <CustomErrorField errorMessage={errors['tagsList'].message} />}
                </Flex>
                <Text
                    color='gray.500'
                    fontFamily='Poppins'
                    fontStyle='italic'
                    mt='10px'
                    fontSize='xs'>
                        Select up to 5 tags
                </Text>
            </Field.Root>
        </Flex>
    )
}

export default ExchangeProfileForm
