import { ChangeEvent, useContext, useEffect, useState } from "react"
import { TEEAuthDataContext, UserProfileContext } from "../context"
import { FormErrors } from "../core/Forms.types"
import { addUserExtension, getUser } from "../services/ProfileService/ProfileService"
import { PostUserProfileExtensionRequest } from "../services/ProfileService/ProfileService.requests"
import useUserProfileExtensionsValidation from "./useUserProfileExtensionsValidation"

interface UpdateExtensionParams {
    token: string
    userId: string
    apiUrl: string
    code: string 
    data: string 
}

export interface TagsData {
    value: string
    tagsList: string[]
}

interface UseUserProfileExtensionsParams {
    reload: boolean 
}

const useUserProfileExtensions = ({ reload }: UseUserProfileExtensionsParams) => {
    const { userProfile } = useContext(UserProfileContext)
    const { auth, edxAppConfig } = useContext(TEEAuthDataContext)
    const [additionalTitle, setAdditionalTitle] = useState("")
    const [bio, setBio] = useState("")
    const [tags, setTags] = useState<TagsData>({
        value: "",
        tagsList: []
    })
    const [isSavingExtensions, setIsSavingExtensions] = useState(false)
    const { validData, validateAdditionalTitle, validateBio, validateTag, checkAllTags } = useUserProfileExtensionsValidation()
    const [errors, setErrors] = useState<FormErrors>({})

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newErrors = {...errors}

        if (e.target.id === "additionalTitle") {
            const error = validateAdditionalTitle(e.target.value)

            if (error)
                newErrors[e.target.id] = error
            else 
                delete newErrors[e.target.id]
            
            setAdditionalTitle(e.target.value)
        }
        else if (e.target.id === "tags") {
            const error = validateTag(e.target.value)

            if (error)
                newErrors[e.target.id] = error
            else 
                delete newErrors[e.target.id]

            const newTagsList = [...tags.tagsList]

            setTags({
                value: e.target.value,
                tagsList: newTagsList
            })
        }

        setErrors(newErrors)
    }

    const onAddTag = () => {
        const newErrors = {...errors}

        const tagError = validateTag(tags.value)
        if (tagError) {
            newErrors["tags"] = tagError
            setErrors(newErrors)

            return 
        }
        else 
            delete newErrors["tags"]

        if (tags.tagsList.length < 5 && !tags.tagsList.find(tag => tag === tags.value)) {
            const newTagsList = [...tags.tagsList]
            newTagsList.push(tags.value)

            const error = checkAllTags(newTagsList)
    
            if (error)
                newErrors["tagsList"] = error
            else 
                delete newErrors["tagsList"]

            setErrors(newErrors)
            return setTags({
                value: "",
                tagsList: newTagsList
            })
        }

        setTags({
            value: "",
            tagsList: [...tags.tagsList]
        })
    }

    const onRemoveTag = (tagName: string) => {
        const newTagsList = tags.tagsList.filter(tag => tag !== tagName)

        const newErrors = {...errors}
        const error = checkAllTags(newTagsList)

        if (error)
            newErrors["tagsList"] = error
        else 
            delete newErrors["tagsList"]

        setErrors(newErrors)
        setTags({
            value: tags.value,
            tagsList: newTagsList
        })
    }

    const onChangeBio = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newErrors = {...errors}
        const error = validateBio(e.target.value)

        if (error)
            newErrors["bio"] = error
        else 
            delete newErrors["bio"]        

        setErrors(newErrors)
        setBio(e.target.value)
    }

    const updateExtension = async ({ userId, data, code, token, apiUrl }: UpdateExtensionParams) => {
        const { edxAppConfig } = useContext(TEEAuthDataContext)
        const request: PostUserProfileExtensionRequest = {
            userId,
            code,
            data,
            dataType: "string"
        }

        console.log('post extension request', request)

        const result = await addUserExtension(token, apiUrl, request, edxAppConfig?.api)

        return result
    }

    const onSave = async () => {
        if (auth && auth.user && userProfile && edxAppConfig) {
            const token = auth.user.access_token
            const apiUrl = edxAppConfig.api.edfiApiBaseUri as string            
            const tenantId = userProfile.tenantId

            const getUserResult = await getUser(
                token,
                apiUrl,
                tenantId,
                userProfile.email,
                edxAppConfig?.api
            )
    
            if (getUserResult.type === 'Response') {
                console.log('get user result', getUserResult.data.data)
    
                const userByEmail = getUserResult.data.data.find(user => user.email === userProfile.email)

                if (userByEmail) {
                    const extensions = []
        
                    extensions.push({ data: additionalTitle, code: 'jobTitle' })
                    extensions.push({ data: bio, code: 'miniBio' })
    
                    const tagsListString = tags.tagsList.join(",")
                    extensions.push({ data: tagsListString, code: 'tags' })
        
                    if (extensions.length > 0) {
                        console.log('updating extensions', extensions)
                        
                        setIsSavingExtensions(true)
    
                        for (let extension of extensions) {
                            await updateExtension({
                                token,
                                apiUrl,
                                userId: userByEmail.userId,
                                data: extension.data,
                                code: extension.code
                            })
                        }
    
                        setIsSavingExtensions(false)
                    }
                }
                else
                    console.log('failed to find user by email...')
            }
        }
    }

    const getExtensions = async () => {
        
    }

    const isValidData = () => {
        const validationResult = validData({
            bio,
            tags: tags.tagsList, 
            additionalTitle
        })

        const validationErrors = validationResult.errors
        if (validationErrors) {
            const newErrors = {...errors}

            if (validationErrors.bioError)
                newErrors["bio"] = { message: validationErrors.bioError.message }

            if (validationErrors.tagsError)
                newErrors['tags'] = { message: validationErrors.tagsError.message }

            if (validationErrors.titleError)
                newErrors['additionalTitle'] = { message: validationErrors.titleError.message }

            setErrors(newErrors)
            
            return false
        }

        return true
    }

    useEffect(() => {
        if (reload)
            getExtensions()
    }, [ userProfile, reload ])

    return {
        additionalTitle,
        bio,
        tags,
        errors,
        isValidData,
        isSavingExtensions,
        onInputChange,
        onChangeBio,
        onSave,
        onAddTag,
        onRemoveTag
    }
}

export default useUserProfileExtensions