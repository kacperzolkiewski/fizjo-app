import * as yup from "yup";

export const editPatientSchema = yup.object().shape({
  email: yup
    .string()
    .email("Niepoprawny adres email")
    .required("Email jest wymagany"),
  name: yup.string().required("Imię jest wymagane"),
  surname: yup.string().required("Nazwisko jest wymagane"),
  pesel: yup
    .string()
    .min(11, "Pesel musi posiadać 11 cyfr")
    .max(11, "Pesel musi posiadać 11 cyfr"),
  adress: yup.string(),
  phone: yup
    .string()
    .min(9, "Numer musi posiadać 9 cyfr")
    .max(9, "Numer musi posiadać 9 cyfr"),
});
