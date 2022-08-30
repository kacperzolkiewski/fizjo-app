import { Button, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
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

  const submitForm: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Stack alignItems="center">
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          label="Password"
          error={errors.password?.message}
          register={register}
        />
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Stack>
  );
};
