import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Flex, useToast } from "@chakra-ui/react";
import { FormField } from "../../../components/FormField";
import { registerSchema } from "../utilities/registerSchema";
import { useSignUpEmailPassword } from "@nhost/react";

export const RegisterView = ({ isPatient }: { isPatient: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const showToast = useToast();

  const { signUpEmailPassword } = useSignUpEmailPassword();

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const { isError, error } = await signUpEmailPassword(
      data.email,
      data.password,
      {
        allowedRoles: ["user"],
        metadata: {
          name: data.name,
          surname: data.surname,
          isPatient: isPatient,
        },
      }
    );
    if (isError) {
      showToast({
        title: "Nie udało się zarejestrować",
        description: error?.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      showToast({
        title: "Pomyślnie zarejestrowano",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex alignItems="center" w="full" justifyContent="center">
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FormField
          name="name"
          label="Imię"
          error={errors.name?.message}
          register={register}
        />
        <FormField
          name="surname"
          label="Nazwisko"
          error={errors.surname?.message}
          register={register}
        />
        <FormField
          name="email"
          label="Email"
          error={errors.email?.message}
          register={register}
        />
        <FormField
          name="password"
          label="Hasło"
          error={errors.password?.message}
          register={register}
          type="password"
        />
        <FormField
          name="confirmPassword"
          label="Potwierdź hasło"
          error={errors.confirmPassword?.message}
          register={register}
          type="password"
        />
        <Button
          mt={4}
          colorScheme="purple"
          isLoading={isSubmitting}
          type="submit"
          w="100%"
        >
          Zarejestruj się
        </Button>
      </form>
    </Flex>
  );
};