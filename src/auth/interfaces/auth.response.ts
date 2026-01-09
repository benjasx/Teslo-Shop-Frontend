import type { User } from "@/interfaces/user.interface";

// Login, Register, ChecStatus
export interface AuthResponse {
  user: User;
  token: string;
}
