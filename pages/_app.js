import NavBar from '@components/NavBar';
import '@styles/globals.css';
import '@styles/navbar.css';
import '@styles/index.css';
import '@styles/worksamples.css';
import '@styles/nonfictionbooks.css';
import '@styles/Footer.css';
import '@styles/contact.css';

function Application({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
