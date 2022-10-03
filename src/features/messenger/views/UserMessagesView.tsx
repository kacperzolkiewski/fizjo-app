import { useRouter } from "next/router";
import React from "react";
import { MessagesFeed } from "../components/MessagesFeed";
import { MessangerView } from "./MessangerView";

export const UserMessagesView = () => {
  const { query } = useRouter();
  const { userId }: { userId?: string } = query;

  return (
    <MessangerView>
      {typeof userId === "string" ? <MessagesFeed userId={userId} /> : null}
    </MessangerView>
  );
};
