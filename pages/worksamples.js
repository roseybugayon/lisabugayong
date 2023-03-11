import Image from 'next/image';
import arrow from '@assets/workDownArrow.svg';

export default function worksamples({ title }) {
  return (
    <div className="workSamples">
      <div className="workIntro">
        <h1>Work Samples</h1>
        <p>
          “I design every class or document with care, considering the company
          style, target audience, and appropriate content.”
        </p>
        <div className="workArrow">
          <Image src={arrow} alt="down arrow" />
        </div>
      </div>
      <div className="classes">
        <div className="class">
          <h3>E-Learning Training Classes</h3>
          <div className="workSample">
            <p>Customer Excess Training</p>
            <button className="view">View</button>
            <p>
              This class outlines the company’s new procedure for sales people
              to market and sell excess customer parts.
            </p>
          </div>
          <div className="workSample">
            <p>Generating Quotes Lesson E-learning</p>
            <button className="view">View</button>
            <p>
              This is one section of a class for new hires to learn the Biznet
              business software. This sectionshows how to use the software to do
              customer quotes.
            </p>
          </div>
        </div>
        <div className="class">
          <h3>Virtual PowerPoint Training Classes</h3>
          <div className="workSample">
            <p>Effective Delegation</p>
            <button className="view">View</button>
            <p>
              This is class for people managers that discusses how to delegate
              effectively.
            </p>
          </div>
          <div className="workSample">
            <p>Planning Difficult Conversations</p>
            <button className="view">View</button>
            <p>
              This is another class for people managers that discusses how to
              plan for difficult conversations.
            </p>
          </div>
        </div>
        <div className="class">
          <h3>Training Workshops</h3>
          <div className="trainingWorkshops">
            <p>Oring Contact Pressure Workshop</p>
            <button className="view">View</button>
            <p>
              This is a workshop that demonstrates how Marc and Patran can be
              used to solve for contact pressure on an o-ring on a submarine’s
              entrance hatch.
            </p>
          </div>
          <div className="rubberSeal">
            <p>Rubber Seal Marc120 Workshop</p>
            <button className="view">View</button>
            <p>
              This is a workshop that demonstrates how Marc and Patran can be
              used to solve for the stresses and deflections created on rubber
              seal when a door is closed.
            </p>
          </div>
        </div>
      </div>
      <div>Back to Home</div>
    </div>
  );
}
