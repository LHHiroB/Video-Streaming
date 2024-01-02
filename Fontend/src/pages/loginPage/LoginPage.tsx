import React from "react";
import { Link, useHref, useNavigate } from "react-router-dom";
import { loginUserWithSupabase } from "../../services/userAuthentication";
import {
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
type Props = {};

const MyApp_LoginPage = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("chatapp_currentUser") || "{}"
    );
    if (!currentUser.user) navigate("/login");
  }, []);

  const handleOnClick = async (): Promise<void> => {
    if (email === "" || password === "") return;
    setIsLoading(true);
    await loginUserWithSupabase(email, password).then(() => {
      setIsLoading(false);
      navigate("/");
    });
  };
  return (
  );
};

// ButtonRegister to be used in LoginPage in case user doesn't have an account
const ButtonRegister = (props: Props) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    // redirect to register page
    navigate("/register");
  };
  return <Button onClick={handleOnClick}>Register</Button>;
};

export default MyApp_LoginPage;
