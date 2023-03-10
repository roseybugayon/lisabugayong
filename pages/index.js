import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profile from '@assets/IMG_1089.png';
import arrow from '@assets/rightArrow.svg';
import laptop from '@assets/laptop.svg';
import book from '@assets/book.svg';
import phone from '@assets/phone.svg';
import leftQuote from '@assets/left-quote.svg';
import rightQuote from '@assets/right-quote.svg';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lisa Bugayong Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="home">
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
              style={{ marginTop: '-0.4rem' }}
            />
          </div>
          <div className="sections">
            <div className="left-section">
              <div className="title">
                <h2>Instructional Designer & Writer</h2>
                <div id="titleBar" />
              </div>
              <p>
                “The road to a better world is a winding, rough, uphill one, and
                the horsepower we need to ascend this road is education. My goal
                is to create documents that are target audience specific,
                technically accurate, and professionally appealing.”
              </p>
              <Link href="/contact">
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
              <div className="pink-square" />
            </div>
          </div>
        </div>
        <div className="boxes">
          <Link href="/worksamples">
            <div className="navBoxes" id="work">
              <h2>Work Samples</h2>
              <div className="icons">
                <Image src={laptop} alt="laptop" />
                <Image src={arrow} alt="arrow" />
              </div>
            </div>
          </Link>
          <Link href="/nonfictionbooks">
            <div className="navBoxes" id="books">
              <h2>Nonfiction Books</h2>
              <div className="icons">
                <Image src={book} alt="book" />
                <Image src={arrow} alt="arrow" />
              </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className="navBoxes" id="contact">
              <h2>Contact Information</h2>
              <div className="icons">
                <Image src={phone} alt="phone" />
                <Image src={arrow} alt="arrow" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
