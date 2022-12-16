import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { AuthModal } from "../components/AuthModal";
import { selectAuthModalState } from "../store/authSlice";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }) {
  const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: 'Alexandria', sans-serif; 
      padding: 0;
      margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  `;
  const authState = useSelector(selectAuthModalState);

  // axios({
  //   method: "get",
  //   url: `http://51.38.130.146:8080/login`,
  //   withCredentials: false,
  //   // params: {
  //   //   access_token: SECRET_TOKEN,
  //   // },
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  // })

  // axios
  //   .post("http://51.38.130.146:8080/login", data)

  // fetch("http://51.38.130.146:8080/login", {
  //   method: "POST",
  //   mode: "no-cors",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //     "Cache-Control": "no-cache",
  //     "Refer-Policy": "no-referrer",
  //   },
  //   body: new URLSearchParams(data),
  // })

  // axios({
  //   url: "http://51.38.130.146:8080/login",
  //   method: "get",
  //   // data: data,
  //   // headers: {
  //   //   "Content-Type": "application/x-www-form-urlencoded",
  //   //   "Cache-Control": "no-cache",
  //   //   "Refer-Policy": "no-referrer",
  //   // },
  // })

  useEffect(() => {
    fetch("http://51.38.130.146:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: new URLSearchParams({
        username: "admin@gmail.com",
        password: "admin",
      }),
    }).then(async (response) => {
      const { SESSION } = await response.json();
      document.cookie = `SESSION=${SESSION}`;
    });
  }, []);

  fetch("http://51.38.130.146:8080/user-service/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "no-cors",
  });

  // .then(
  //   async (response) => {
  //     console.log(await response.json());
  //   }
  // );

  return (
    <>
      <Head>
        <title>Two Monkeys App</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
