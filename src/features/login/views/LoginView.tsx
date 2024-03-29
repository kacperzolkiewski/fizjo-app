import { Button, Flex, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignInEmailPassword } from "@nhost/react";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormField } from "@/components/FormField";
import { loginSchema } from "@/features/login/utilities/loginSchema";

export const LoginView = (): JSX.Element => {
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
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
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
          name="password"
          type="password"
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
