import Image from 'next/image';
import Link from 'next/link';
import arrow from '@assets/workDownArrow.svg';
import download from '@assets/download.png';
import { Footer } from '../components';

export default function worksamples({ title }) {
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
    <div className="workSamples">
      <div className="workIntro">
        <h1>Work Samples</h1>
        <p>
          “I design every class or document with care, considering the company
          style, target audience, and appropriate content.”
        </p>
        <div className="workArrow">
          <Link href="#classes" onClick={handleScroll} legacyBehavior={false}>
            <Image src={arrow} alt="down arrow" />
          </Link>
        </div>
      </div>
      <div className="classes" id="classes">
        <div className="class">
          <h3 className="elearning">E-Learning Training Classes</h3>
          <div className="elearningTitle" />
          <div className="workSample">
            <h4>Customer Excess Training</h4>
            <div className="workBtns">
              <Link href="/files/customer-excess-training.ppsx">
                <div className="download">
                  <Image src={download} alt="download" height={30} width={30} />
                </div>
              </Link>
            </div>
            <p>
              This class outlines the company&#39;s new procedure for sales
              people to market and sell excess customer parts.
            </p>
          </div>
          <div className="workSample">
            <h4>Generating Quotes Lesson E-learning</h4>
            <div className="workBtns">
              <Link href="/files/0-generate-quotes.ppsx">
                <div className="download">
                  <Image src={download} alt="download" height={30} width={30} />
                </div>
              </Link>
            </div>

            <p>
              This is one section of a class for new hires to learn the Biznet
              business software. This sectionshows how to use the software to do
              customer quotes.
            </p>
          </div>
        </div>
        <div className="class">
          <h3 className="powerpoint">Virtual PowerPoint Training Classes</h3>
          <div className="powerpointTitle" />
          <div className="workSample">
            <h4>Effective Delegation</h4>
            <div className="workBtns">
              <a
                href="/files/effective-delegation.pdf"
                target="_blank"
                className="view"
                rel="noreferrer">
                View
              </a>
              <a
                className="download"
                href="/files/effective-delegation.pdf"
                download>
                <Image src={download} alt="download" height={30} width={30} />
              </a>
            </div>
            <p>
              This is class for people managers that discusses how to delegate
              effectively.
            </p>
          </div>
          <div className="workSample">
            <h4>Planning Difficult Conversations</h4>
            <div className="workBtns">
              <a
                href="/files/planning-difficult-conversations.pdf"
                target="_blank"
                className="view"
                rel="noreferrer">
                View
              </a>
              <a
                className="download"
                href="/files/planning-difficult-conversations.pdf"
                download>
                <Image src={download} alt="download" height={30} width={30} />
              </a>
            </div>
            <p>
              This is another class for people managers that discusses how to
              plan for difficult conversations.
            </p>
          </div>
        </div>
        <div className="class">
          <h3 className="referencesAndGuides">References and Guidelines</h3>
          <div className="referenceTitle" />
          <div className="workSample">
            <h4>Training QRG</h4>
            <div className="workBtns">
              <a
                href="/files/training-qrg-2.pdf"
                target="_blank"
                className="view"
                rel="noreferrer">
                View
              </a>
              <a className="download" href="/files/training-qrg-2.pdf" download>
                <Image src={download} alt="download" height={30} width={30} />
              </a>
            </div>
            <p>
              This Training Quick Reference Guide covers some basic essential
              training software: Audacity for creating audio; Camtasia and
              Campro for creating videos; as well as PowerPoint animations,
              pictures, and SCORM packages. It also goes over an elementary
              understanding of the LMS, Moodle.
            </p>
          </div>
          <div className="workSample">
            <h4>Agile Guide and Scrum Roles</h4>
            <div className="workBtns">
              <a
                href="/files/agile-guide-and-scrum-roles.pdf"
                target="_blank"
                className="view"
                rel="noreferrer">
                View
              </a>
              <a
                className="download"
                href="/files/agile-guide-and-scrum-roles.pdf"
                download>
                <Image src={download} alt="download" height={30} width={30} />
              </a>
            </div>
            <p>
              This document is a scrum and agile guide. It covers the scrum
              terminology, events, and roles and responsibilities.
            </p>
          </div>
          <div className="workSample">
            <h4>Creating a Knowledge Base Article</h4>
            <div className="workBtns">
              <a
                href="/files/guide-to-knowledge-articles.pdf"
                target="_blank"
                className="view"
                rel="noreferrer">
                View
              </a>
              <a
                className="download"
                href="/files/guide-to-knowledge-articles.pdf"
                download>
                <Image src={download} alt="download" height={30} width={30} />
              </a>
            </div>
            <p>
              This document is a guideline that discusses how to create
              knowledge base articles for ease of use and searchability.
            </p>
          </div>
        </div>
        <div className="class">
          <h3 className="trainingWork">Training Workshops</h3>
          <div className="trainingTitle" />
          <div className="workSample">
            <h4>Oring Contact Pressure Workshop</h4>
            <div className="workBtns">
              <a
                href="/files/contact_pressure_oring_hatch.pdf"
                target="_blank"
                className="view"
                rel="noreferrer">
                View
              </a>
              <a
                className="download"
                href="/files/contact_pressure_oring_hatch.pdf"
                download>
                <Image src={download} alt="download" height={30} width={30} />
              </a>
            </div>
            <p>
              This is a workshop that demonstrates how Marc and Patran can be
              used to solve for contact pressure on an o-ring on a
              submarine&#39;s entrance hatch.
            </p>
          </div>
          <div className="workSample">
            <h4>Rubber Seal Marc120 Workshop</h4>
            <div className="workBtns">
              <a
                href="/files/ws04_rubber_seal_marc120.pdf"
                target="_blank"
                className="view"
                rel="noreferrer">
                View
              </a>
              <a
                className="download"
                href="/files/ws04_rubber_seal_marc120.pdf"
                download>
                <Image src={download} alt="download" height={30} width={30} />
              </a>
            </div>
            <p>
              This is a workshop that demonstrates how Marc and Patran can be
              used to solve for the stresses and deflections created on rubber
              seal when a door is closed.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
