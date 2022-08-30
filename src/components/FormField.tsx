import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import React from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

interface FormFieldProps {
  label: string;
  name: string;
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  register: UseFormRegister<FieldValues>;
}

export const FormField = ({
  label,
  error,
  register,
  ...props
}: InputProps & FormFieldProps) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <Input
        type={props.type}
        placeholder={props.name}
        {...register(props.name)}
      />
      <FormErrorMessage>
        <>{error}</>
      </FormErrorMessage>
    </FormControl>
  );
};
