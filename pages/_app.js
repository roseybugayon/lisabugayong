import NavBar from "@components/NavBar";
import "@styles/globals.css";
import "@styles/navbar.css";
import "@styles/index.css";

function Application({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
