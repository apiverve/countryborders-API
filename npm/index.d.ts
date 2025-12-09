declare module '@apiverve/countryborders' {
  export interface countrybordersOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface countrybordersResponse {
    status: string;
    error: string | null;
    data: CountryBordersData;
    code?: number;
  }


  interface CountryBordersData {
      country:     string;
      cca2:        string;
      landlocked:  boolean;
      region:      string;
      subregion:   string;
      coordinates: Coordinates;
      borders:     string[];
  }
  
  interface Coordinates {
      lat: number;
      lng: number;
  }

  export default class countrybordersWrapper {
    constructor(options: countrybordersOptions);

    execute(callback: (error: any, data: countrybordersResponse | null) => void): Promise<countrybordersResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: countrybordersResponse | null) => void): Promise<countrybordersResponse>;
    execute(query?: Record<string, any>): Promise<countrybordersResponse>;
  }
}
