import { useConfig } from "../context"

const useImagesLinkUrl = () => {
try {

  const { config }= useConfig()
  const getAssetsUrl = () => {
    return `${config.app.basePath || ''}/assets`
  }
  
  return {
    getAssetsUrl
  }
} catch (error) {
  return {
    getAssetsUrl: () => {
      return `${import.meta.env.BASE_URL || ''}assets`
    }
  }
}

}

export default useImagesLinkUrl