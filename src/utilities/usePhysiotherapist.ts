import { useUserEmail, useUserId } from "@nhost/react";
import { useGetUserByIdQuery } from "../features/physiotherapist/api/graphql";
import { Physioterapist } from "./types";
import { isNull } from "lodash";

export const usePhysiotherapist = (): Physioterapist => {
  const id = useUserId();
  const email = useUserEmail();
  const { data } = useGetUserByIdQuery({ variables: { user_id: id } });

  const currentPhysiotherapist = data?.physiotherapists[0];

  const physiotherapist: Physioterapist = {
    id: currentPhysiotherapist?.id,
    name: currentPhysiotherapist?.name,
    surname: currentPhysiotherapist?.surname,
    email,
    phone: isNull(currentPhysiotherapist?.phone)
      ? ""
      : currentPhysiotherapist?.phone,
    adress: isNull(currentPhysiotherapist?.adress)
      ? ""
      : currentPhysiotherapist?.adress,
    aboutMe: isNull(currentPhysiotherapist?.aboutMe)
      ? ""
      : currentPhysiotherapist?.aboutMe,
  };

  return physiotherapist;
};
