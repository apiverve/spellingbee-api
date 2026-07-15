declare module '@apiverve/spellingbee' {
  export interface spellingbeeOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface spellingbeeResponse {
    status: string;
    error: string | null;
    data: SpellingBeeGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SpellingBeeGeneratorData {
      centerLetter: null | string;
      outerLetters: (null | string)[];
      allLetters:   (null | string)[];
      difficulty:   null | string;
      wordCount:    number | null;
      pangramCount: number | null;
      maxPoints:    number | null;
      words:        Word[];
      html:         null | string;
      image:        Image;
  }
  
  interface Image {
      imageName:   null | string;
      format:      null | string;
      downloadURL: null | string;
      expires:     number | null;
  }
  
  interface Word {
      word:      null | string;
      points:    number | null;
      isPangram: boolean | null;
  }

  export default class spellingbeeWrapper {
    constructor(options: spellingbeeOptions);

    execute(callback: (error: any, data: spellingbeeResponse | null) => void): Promise<spellingbeeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: spellingbeeResponse | null) => void): Promise<spellingbeeResponse>;
    execute(query?: Record<string, any>): Promise<spellingbeeResponse>;
  }
}
