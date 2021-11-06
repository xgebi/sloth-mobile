import {ErrorData} from "./interfaces/AuthenticationData";
import Language from "./interfaces/Language";

class LanguageService {
  static async getLanguages(token: string): Promise<Language[] | ErrorData> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      authorization: token,
    });
    const responseRaw = await fetch(`${process.env.nextUrl}/api/languages`,{
      method: 'GET',
      headers
    });
    const response = await responseRaw.json();
    return response;
  }
}

export default LanguageService;