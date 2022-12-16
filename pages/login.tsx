import axios from "axios";
import { AuthModal } from "../components/AuthModal";
import { AuthType } from "../types/types";

const Login = () => {
  const data = { username: "chuj@wp.pl", password: "string" };

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
      "Refer-Policy": "no-referrer",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    proxy: {
      host: "localhost",
      port: 3000,
    },
  };

  axios
    .post("http://51.38.130.146:8080/login", data, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("dostales err", err);
    });

  return <AuthModal modalType={AuthType.Login} />;
};

export default Login;
