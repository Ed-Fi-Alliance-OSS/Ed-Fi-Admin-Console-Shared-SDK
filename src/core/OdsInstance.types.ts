export interface ODSInstance {
  instanceType: string
  id: number
  name: string
  // Only for Updating Instance
  connectionString?: string
} 