import { useUserData } from "@nhost/react";
import { useRouter } from "next/router";
import React from "react";
import { PatientMessagesFeed } from "@/features/messenger/components/PatientMessagesFeed";
import { PhysiotherapistMessagesFeed } from "@/features/messenger/components/PhysiotherapistMessagesFeed";
import { MessengerView } from "@/features/messenger/views/MessengerView";

export const UserMessagesView = (): JSX.Element => {
  const { query } = useRouter();
  const { userId }: { userId?: string } = query;
  const data = useUserData();
  const isPatient = data?.metadata.isPatient as boolean;

  return (
    <MessengerView>
      {userId != null ? (
        isPatient ? (
          <PatientMessagesFeed physiotherapistId={userId} />
        ) : (
          <PhysiotherapistMessagesFeed patientId={userId} />
        )
      ) : null}
    </MessengerView>
  );
};
