import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack } from "@chakra-ui/react";
import { FormField } from "../../../components/FormField";
import { registerSchema } from "../utilities/registerSchema";

export const RegisterView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
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
          name="name"
          label="Name"
          error={errors.name?.message}
          register={register}
        />
        <FormField
          name="surname"
          label="Surname"
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
          label="Password"
          error={errors.password?.message}
          register={register}
        />
        <FormField
          name="confirmPassword"
          label="Confirm Password"
          error={errors.confirmPassword?.message}
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
