import Image from 'next/image';
import Link from 'next/link';
import leftArrow from '@assets/workLeftArrow.svg';

const Footer = () => {
  return (
    <div className="workBack">
      <Link href="/">
        <div className="workLeftArrow">
          <Image src={leftArrow} alt="left arrow to home" height={55} />
        </div>
      </Link>
      <p>Back to Home</p>
    </div>
  );
};
export default Footer;
