import { BaseResponse } from "./BaseResponse";

export interface User {
  username: string;
  password: string;
}

export interface UserState {
  user: User | null;
  isLogin: boolean;
  isAuthenticated: boolean;
  token: string;
}

export interface LoginResponse extends BaseResponse {
  data: {
    token: string;
  };
}
