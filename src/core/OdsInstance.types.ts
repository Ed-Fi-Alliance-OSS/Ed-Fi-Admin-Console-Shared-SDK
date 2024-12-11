export interface ODSInstance {
  // odsInstanceId: string | number
  // document: {
  //   name: string
  //   instanceType?: string
  // }
  instanceType: string
  id: string
  name: string
  // Only for Updating Instance
  connectionString?: string
} 