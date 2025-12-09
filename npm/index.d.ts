declare module '@apiverve/spellingbee' {
  export interface spellingbeeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface spellingbeeResponse {
    status: string;
    error: string | null;
    data: SpellingBeeGeneratorData;
    code?: number;
  }


  interface SpellingBeeGeneratorData {
      centerLetter: string;
      outerLetters: string[];
      allLetters:   string[];
      difficulty:   string;
      wordCount:    number;
      pangramCount: number;
      maxPoints:    number;
      words:        Word[];
      html:         string;
      image:        Image;
  }
  
  interface Image {
      imageName:   string;
      format:      string;
      downloadURL: string;
      expires:     number;
  }
  
  interface Word {
      word:      string;
      points:    number;
      isPangram: boolean;
  }

  export default class spellingbeeWrapper {
    constructor(options: spellingbeeOptions);

    execute(callback: (error: any, data: spellingbeeResponse | null) => void): Promise<spellingbeeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: spellingbeeResponse | null) => void): Promise<spellingbeeResponse>;
    execute(query?: Record<string, any>): Promise<spellingbeeResponse>;
  }
}
