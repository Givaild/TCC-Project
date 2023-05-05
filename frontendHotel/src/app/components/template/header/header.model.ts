export interface LoginInfo {
  logged: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  }
}