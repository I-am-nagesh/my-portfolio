import Homelayout from "../layouts/HomeLayout";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <Homelayout>
      <div className="flex justify-center items-center pt-20 h-[100vh]">
        <div className="text-xl text-white ml-24">
          <h1 className="text-center text-3xl mb-8">Know Who I'M</h1>
          <p className="text-left">
            Hi Everyone, I am <span className="purple">Nagesh Pandey </span>
            from <span className="purple"> Bhojpur, India.</span>
            <br />
            I am currently pursuing my B.tech from NIT Agartala in Electrical
            Engineering.
            <br />
            <br />
            Apart from Electrical Engineering, I love to do coding!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </Homelayout>
  );
}
export default About;
