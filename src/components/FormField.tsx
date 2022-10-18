import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

interface FormFieldProps {
  label?: string;
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
  value,
  onChange,
  w,
  placeholder,
  ...props
}: InputProps & FormFieldProps) => {
  return (
    <FormControl isInvalid={Boolean(error)} w={w} mt="15px">
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <Input
        type={props.type}
        placeholder={placeholder || `...`}
        {...register(props.name)}
        value={value}
        onChange={onChange}
      />
      <FormErrorMessage>
        <>{error}</>
      </FormErrorMessage>
    </FormControl>
  );
};
