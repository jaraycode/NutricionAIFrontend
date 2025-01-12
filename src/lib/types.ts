export interface LogInUser {
  id: number;
  JWT: string;
}

export type Role = "USER" | "ADMIN";

export interface User {
  user_id: string;
  config_id: number;
  name: string;
  email: string;
  password: string;
  createAt: string;
  updateAt: string;
  role: Role;
  food: Food[] | null;
  Configuration: Configuration;
}

export interface Food {
  id: number;
  user_id: number;
  name: string;
  foodGr: number;
  calories: number;
  fat: number;
  protein: number;
  Description: string | null;
  user: User | null;
  createAt: string | Date;
}

export interface Configuration {
  id: number;
  caloriesPerDay: number;
  fatPerDay: number;
  proteinPerDay: number;
  User: User | null;
}

export interface ChartData {
  caloriesConsumidas: number;
  proteinConsumidas: number;
  fatConsumidas: number;
  month: string;
}

export type month = "Jan" | "Feb" | "March";
