import { useRouter } from "next/router";
import React from "react";
import { MessagesFeed } from "../components/MessagesFeed";
import { MessengerView } from "./MessengerView";

export const UserMessagesView = () => {
  const { query } = useRouter();
  const { userId }: { userId?: string } = query;

  return (
    <MessengerView>
      {typeof userId === "string" ? <MessagesFeed userId={userId} /> : null}
    </MessengerView>
  );
};
