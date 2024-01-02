import React from "react";
import ButtonLogout from "../../components/ButtonLogout/ButtonLogout";
import supabase from "../../config/supabase/supabase";

type Props = {};

const MyApp_HomePage = (props: Props) => {
  const [message, setMessage] = React.useState<string>("");
  const myChannel = supabase.channel("room-2", {
    config: {
      broadcast: { self: true },
    },
  });
  // @ts-ignore
  myChannel.on("broadcast", { event: "test-my-messages" }, (payload) => {
    console.log(payload);
  });
  //@ts-ignore
  myChannel.subscribe((status) => {
    if (status !== "SUBSCRIBED") {
      return;
    }
  });
  return (
  );
};

export default MyApp_HomePage;
