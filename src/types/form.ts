export type FormState = {
  success: boolean;
  formError?:string,
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
};