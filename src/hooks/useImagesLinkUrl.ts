// import { useConfig } from "../context"

const useImagesLinkUrl = () => {

  // const { config }= useConfig()
  const getAssetsUrl = () => {
    return `${import.meta.env.BASE_URL || ''}assets`
  }

  return {
    getAssetsUrl
  }

}

export default useImagesLinkUrl