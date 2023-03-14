import Link from 'next/link';
import Image from 'next/image';
import arrow from '@assets/workDownArrow.svg';
import external from '@assets/external-link.svg';
import kingdomBook from '@assets/kingdomBook.png';
import { Footer } from '../components';

export default function nonfictionbooks() {
  const handleScroll = e => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className="nonfiction">
      <div className="workIntro" style={{ marginBottom: '2rem' }}>
        <h1>Nonfiction Books</h1>
        <p>
          “I wrote these books as an outlet for my frustration in watching
          religion be used as an excuse for violence. My mission is to strive
          towards peace by showing respect and understanding to all people and
          all religions and remembering daily that each of us is uniquely create
          by God.”
        </p>
        <div className="workArrow">
          <Link
            href="#bookSection"
            onClick={handleScroll}
            legacyBehavior={false}>
            <Image src={arrow} alt="down arrow" />
          </Link>
        </div>
      </div>
      <div className="books" id="bookSection">
        <div className="book">
          <div className="bookDescription">
            <h3>A Pluralistic Portrait of God</h3>
            <div className="pluralisticTitle" />
            <p>
              The years between 800 and 200 BC were vibrating with new religious
              ideas. God had burst onto the scene revealing himself to specific
              people in various parts of the world, creating the beginning of
              our modern world religions. This book assumes that all these
              religions were initially produced by God, and endeavors to portray
              God as to vast to be fully contained within only one religion. I
              hope to inspire people to enlarge their idea of God by perceiving
              him through the eyes of all the major religions from Judaism to
              Islam, Christianity, Hinduism, Buddhism, and Taoism. I explain how
              each different religion brings a new perspective of the divine
              that when collected together creates a wonderfully pluralistic
              portrait of God.
            </p>
            <a
              href="https://www.amazon.com/Pluralistic-Portrait-God-Lisa-Bugayong-ebook/dp/B00AUADF84/ref=sr_1_1?dchild=1&keywords=lisa+bugayong&qid=1613856785&sr=8-1"
              className="amazonLink"
              target="_blank">
              <p>View on Amazon.com</p>
              <Image src={external} alt="external link" />
            </a>
          </div>
          <Image
            src={kingdomBook}
            alt="The Kingdom of God, Road to Peace cover"
          />
        </div>
        <div className="book">
          <Image
            src={kingdomBook}
            alt="The Kingdom of God, Road to Peace cover"
          />
          <div className="bookDescription">
            <h3 id="kingdom">The Kingdom of God: A Road to Peace</h3>
            <div className="kingdomTitle" />
            <p>
              Christians tend to think of God&#39;s kingdom as a reward in
              heaven or as something to look forward to in the future when Jesus
              will return to earth. These beliefs about God&#39;s kingdom are
              too limiting because they hold us back from achieving the reality
              of God&#39;s kingdom in our present lives. The purpose of this
              book is to present a fresh and biblically based understanding of
              God&#39;s kingdom that has the power to help us find peace in our
              daily lives, a peace that has the potential to spread beyond
              Christianity and into the world.
            </p>
            <a
              href="https://www.amazon.com/Kingdom-God-Road-Peace-ebook/dp/B0768Q5XVC/ref=sr_1_2?dchild=1&keywords=lisa+bugayong&qid=1613856785&sr=8-2"
              className="amazonLink"
              target="_blank">
              <p>View on Amazon.com</p>
              <Image src={external} alt="external link" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
