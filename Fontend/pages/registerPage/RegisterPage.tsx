import React from "react";
import { signUpUserWithSupabase } from "../../services/userAuthentication";
import { useNavigate } from "react-router-dom";

type Props = {};

const MyApp_RegisterPage: React.FC = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const handleOnClick = async (): Promise<void> => {
    if (email === "" || password === "") return;
    setIsLoading(true);
    await signUpUserWithSupabase(email, password).then(() => {
      setIsLoading(false);
      navigate("/");
    });
  };
  return (
    <>
      {isLoading === false ? (
        <>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button onClick={handleOnClick}>Register</button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default MyApp_RegisterPage;
