import { Button, Flex, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignInEmailPassword } from "@nhost/react";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormField } from "../../../components/FormField";
import { loginSchema } from "../utilities/loginSchema";

export const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const showToast = useToast();

  const { signInEmailPassword, isLoading, needsEmailVerification } =
    useSignInEmailPassword();

  const disableForm = isLoading || needsEmailVerification || isSubmitting;

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const { isError, error } = await signInEmailPassword(
      data.email,
      data.password
    );

    if (isError) {
      showToast({
        title: "Nie udało się zalogować",
        description: error?.message,
        duration: 5000,
        isClosable: true,
        status: "error",
      });
    } else {
      showToast({
        title: "Pomyślnie zalogowano",
        duration: 3000,
        isClosable: true,
        status: "success",
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
          name="email"
          label="Email"
          error={errors.email?.message}
          register={register}
        />
        <FormField
          type="password"
          name="password"
          label="Hasło"
          error={errors.password?.message}
          register={register}
        />
        <Button
          mt={4}
          colorScheme="purple"
          isLoading={isSubmitting}
          disabled={disableForm}
          type="submit"
          w="100%"
        >
          Zaloguj się
        </Button>
      </form>
    </Flex>
  );
};
