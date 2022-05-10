export interface GraphQlResult {
  data?: object;
  errors?: [object];
  extensions?: {
    [key: string]: any;
  };
}
