export type ErrorData = {
  error: string
}

export type UserData = {
  uuid: string,
  displayName: string,
  token: string,
  expiryTime: number,
  permissionsLevel: number,
}