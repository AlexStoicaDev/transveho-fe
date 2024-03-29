export class UserInfo {
  constructor(
    private _token: string,
    private _tokenType: string,
    private _username: string,
    private _email: string,
    private _role: string[]
  ) {}

  get token() {
    if (!this._token) {
      return null;
    }
    return this._token;
  }

  get tokenType() {
    if (!this._tokenType) {
      return null;
    }
    return this._tokenType;
  }

  get username() {
    if (!this._username) {
      return null;
    }
    return this._username;
  }

  get email() {
    if (!this._email) {
      return null;
    }
    return this._email;
  }

  get role() {
    if (!this._role) {
      return null;
    }
    return this._role;
  }
}
