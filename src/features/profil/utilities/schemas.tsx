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
  phone: yup
    .string()
    .min(9, "Numer musi posiadać 9 cyfr")
    .max(9, "Numer musi posiadać 9 cyfr"),
});

export const USER_SCHEMAS = {
  emailSchema: yup.object().shape({
    email: yup
      .string()
      .email("Niepoprawny adres email")
      .required("Email jest wymagany"),
  }),
  phoneSchema: yup.object().shape({
    phone: yup
      .string()
      .min(9, "Numer musi posiadać 9 cyfr")
      .max(9, "Numer musi posiadać 9 cyfr"),
  }),
  adressSchema: yup.object().shape({
    adress: yup.string().required("Adres jest wymagany"),
  }),
  aboutMeSchema: yup.object().shape({
    aboutMe: yup.string().required("Napisz coś o sobie"),
  }),
  visitTypesSchema: yup.object().shape({
    name: yup.string().required("Typ wizyty jest wymagany"),
    price: yup.string().required("Cena jest wymagana"),
  }),
};
