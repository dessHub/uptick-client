import { UserStatus } from "./enums";

export interface User {
  name: string;
  id: number;
  email: string;
  identificationCard: string;
  roles: Array<string>;
  status: UserStatus;
}
