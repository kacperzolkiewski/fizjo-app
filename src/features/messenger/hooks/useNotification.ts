import { useNotDisplayedMessagesQuery } from "@/features/messenger/api/graphql";
import { isUndefined } from "lodash";

export const useNotification = ({
  patientId,
  physiotherapistId,
  userId,
}: {
  patientId?: string;
  physiotherapistId?: string;
  userId?: string;
}) => {
  const { data } = useNotDisplayedMessagesQuery({
    variables: {
      patient_id: patientId,
      physiotherapist_id: physiotherapistId,
      not_created_by: userId,
    },
  });

  if (isUndefined(data)) {
    return false;
  }

  if (!isUndefined(data) && data.messages.length === 0) {
    return false;
  }

  return true;
};
