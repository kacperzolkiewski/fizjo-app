import { useUserId } from "@nhost/react";
import { Physioterapist } from "@/utilities/types";
import { isNull } from "lodash";
import { useGetUserByIdQuery } from "@/features/physiotherapist/api/graphql";

export const usePhysiotherapist = (): Physioterapist => {
  const id = useUserId();
  const { data } = useGetUserByIdQuery({ variables: { user_id: id } });

  const currentPhysiotherapist = data?.physiotherapists[0];

  const physiotherapist: Physioterapist = {
    id: currentPhysiotherapist?.id,
    name: currentPhysiotherapist?.name,
    surname: currentPhysiotherapist?.surname,
    email: currentPhysiotherapist?.user?.email,
    phone: isNull(currentPhysiotherapist?.phone)
      ? ""
      : currentPhysiotherapist?.phone,
    adress: isNull(currentPhysiotherapist?.adress)
      ? ""
      : currentPhysiotherapist?.adress,
    aboutMe: isNull(currentPhysiotherapist?.aboutMe)
      ? ""
      : currentPhysiotherapist?.aboutMe,
    startWork: currentPhysiotherapist?.startWork,
    endWork: currentPhysiotherapist?.endWork,
  };

  return physiotherapist;
};
