import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Niepoprawny adres email")
    .required("Email jest wymagany"),
  password: yup
    .string()
    .min(8, (l) => `Hasło ma minimum ${l.min} znaków`)
    .max(15)
    .required("Hasło jest wymagane"),
});
