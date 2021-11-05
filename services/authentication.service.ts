import UserCredentials from "./interfaces/UserCredentials";

class AuthenticationService {
  static async loginUser(user: UserCredentials) {
    const responseRaw = await fetch('http://localhost:3000/api/authenticate',{
      method: 'POST',
      body: JSON.stringify(user)
    });
    const response = await responseRaw.json()
    console.log(response);
  }
}

export default AuthenticationService;