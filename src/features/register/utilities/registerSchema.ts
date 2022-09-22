import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Imię jest wymagane"),
  surname: yup.string().required("Nazwisko jest wymagane"),
  email: yup
    .string()
    .email("Niepoprawny adres email")
    .required("Email jest wymagany"),
  password: yup
    .string()
    .min(8, (l) => `Hasło ma minimum ${l.min} znaków`)
    .max(15)
    .required("Hasło jest wymagane"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Hasłą muszą być identyczne"),
});
