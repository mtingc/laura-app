export interface IUser {
  id: number;
  name: string;
  lastname: string;
  username: string;
  biography: string;
  email: string;
  password: string;
  phone: string;
  avatar: any; // File
  birthday: Date;
  role: Role;
  confirmed: boolean;
  blocked: boolean;
  created_at: Date;
  updated_at: Date;
  jwt: string;
}

export interface IAuth {
  user: IUser;
  jwt: string;
}

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
