import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUserWithSupabase } from "../../services/userAuthentication";
import { Button } from "@chakra-ui/react";

type Props = {};

const ButtonLogout = (props: Props) => {
  const navigate = useNavigate();
  const handleOnClick = async (): Promise<void> => {
    await logoutUserWithSupabase().then(() => {
      localStorage.removeItem("chatapp_currentUser");
      navigate("/login");
    });
  };
  return <Button onClick={handleOnClick}>Logout</Button>;
};

export default ButtonLogout;
