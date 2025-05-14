import { useConfig } from '../context'

export const useMultiTenancy = () => {
  const {config} = useConfig()
  return {
    isMultiTenancyEnabled: {get: () => config.app.multiTenancy === true}
  }
}