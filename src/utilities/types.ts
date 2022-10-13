export interface Physioterapist {
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  adress?: string;
  aboutMe?: string;
}

export interface Patient {
  id?: string;
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  pesel?: string;
}

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
