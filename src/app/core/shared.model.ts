export enum Role {
  User = 'user',
  Admin = 'admin',
}

export interface User {
  id: number;
  userName: string;
  role: Role;
  email: string;
  confirmed: boolean;
  mobileNumber: string;
}

export interface SbaResponse {
  status: number;
  data?: any;
  message: string;
}
