import Head from 'next/head';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="navBar">
      <Head>
        <title>Lisa Bugayong Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="navBar1">
        <Link href="/worksamples">
          <a className="link">Work Samples</a>
        </Link>
        <Link href="/nonfictionbooks">
          <a className="link">Nonfiction Books</a>
        </Link>
      </div>
      <Link href="/">
        <h1 className="lisaTitle">Lisa Bugayong's Portfolio</h1>
      </Link>
      <div className="navBar2">
        <Link href="/contact">
          <a className="link link2">Contact</a>
        </Link>
        <a
          href="files/lisa_resume_id.pdf"
          target="_blank"
          class="resumeBtn"
          rel="noreferrer">
          Resume
        </a>
      </div>
    </div>
  );
}
