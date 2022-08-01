import { FormikErrors, FormikTouched } from "formik";

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginInputs {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}