import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@components/Header";
import WorkSamples from "./WorkSamples";
import NavBar from "@components/NavBar";
import profile from "@assets/IMG_1089.png";
import laptop from "@assets/laptop.svg";
import book from "@assets/book.svg";
import phone from "@assets/phone.svg";
import leftQuote from "@assets/left-quote.svg";
import rightQuote from "@assets/right-quote.svg";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lisa Bugayong Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className="intro">
          <div className="quote">
            <Image src={leftQuote} alt="left quote" />
            <p>
              Education is the most powerful weapon which you can use to change
              the world -- Nelson Mandela
            </p>
            <Image
              src={rightQuote}
              alt="right quote"
              style={{ marginTop: "-0.4rem" }}
            />
          </div>
          <div className="sections">
            <div className="left-section">
              <div className="title">
                <h2>Instructional Designer & Writer</h2>
                <div id="titleBar"></div>
              </div>
              <p>
                “The road to a better world is a winding, rough, uphill one, and
                the horsepower we need to ascend this road is education. My goal
                is to create documents that are target audience specific,
                technically accurate, and professionally appealing.”
              </p>
              <Link href="/contact" className="link link2">
                <button id="contactBtn">Get in contact!</button>
              </Link>
            </div>
            <div className="right-section">
              <Image
                src={profile}
                alt="profile photo"
                width={200}
                height={267}
              />
              <div className="pink-square"></div>
            </div>
          </div>
        </div>
        <h1>Portfolio</h1>
        <div className="boxes">
          <div className="navBoxBg">
            <div className="dark-pink-square"></div>

            <div className="navBoxes" id="work">
              <h2>Work Samples</h2>
              <Image src={laptop} alt="laptop" />
            </div>
          </div>
          <div>
            <div className="navBoxBg">
              <div className="dark-pink-square"></div>
              <div className="navBoxes" id="books">
                <h2>Nonfiction Books</h2>
                <Image src={book} alt="book" />
              </div>
            </div>
          </div>
          <div className="navBoxBg">
            <div className="dark-pink-square"></div>
            <div className="navBoxes" id="contact">
              <h2>Contact Information</h2>
              <Image src={phone} alt="phone" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
