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

  useEffect(() => {
    // fetch("http://51.38.130.146:8080/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: new URLSearchParams({
    //     username: "admin@gmail.com",
    //     password: "admin",
    //   }),
    // })
    //   .then(async (response) => {
    //     const { SESSION } = await response.json();
    //     document.cookie = `SESSION=${SESSION}`;
    //   })
    //   .catch((err) => {
    //     console.log("Wypierdalaj pyk pyk pyk");
    //   });

    axios
      .post(
        "http://51.38.130.146:8080/login",
        {
          username: "admin@gmail.com",
          password: "admin",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        const { SESSION } = response.data;
        document.cookie = `SESSION=${SESSION}`;
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://51.38.130.146:8080/user-service/user", {
        // uzyj tutaj credentialse
        headers: {
          authorization: "Basic " + window.btoa("admin@gmail.com:admin"),
        },
      })
      .then((res) => console.log(res));
  }, []);

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
