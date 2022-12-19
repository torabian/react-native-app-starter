export interface LoginFormResponse {
  data: {
    item: {
      token: string;
      user: any;
    };
  };
}

export interface BasicUserAuthForm {
  email: string;
  password: string;
  form?: string;
}

export interface UserSession {
  token: string;
  user: any;
}
