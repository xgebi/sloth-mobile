import UserCredentials from "./interfaces/UserCredentials";
import {ErrorData, UserData} from "./interfaces/AuthenticationData";

class AuthenticationService {
  static async loginUser(user: UserCredentials): Promise<UserData | ErrorData> {
    const responseRaw = await fetch(`${process.env.nextUrl}/api/authenticate`,{
      method: 'POST',
      body: JSON.stringify(user)
    });
    const response = await responseRaw.json();
    return response;
  }
}

export default AuthenticationService;