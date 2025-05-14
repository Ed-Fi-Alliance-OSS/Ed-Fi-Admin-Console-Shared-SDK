export interface Tenant {
  tenantId: number;
  document: {
      name: string;
      edfiApiDiscoveryUrl: string;
  };
}