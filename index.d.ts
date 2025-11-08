declare module '@apiverve/countryborders' {
  export interface countrybordersOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface countrybordersResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class countrybordersWrapper {
    constructor(options: countrybordersOptions);

    execute(callback: (error: any, data: countrybordersResponse | null) => void): Promise<countrybordersResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: countrybordersResponse | null) => void): Promise<countrybordersResponse>;
    execute(query?: Record<string, any>): Promise<countrybordersResponse>;
  }
}
