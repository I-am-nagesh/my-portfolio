import Homelayout from "../layouts/HomeLayout";
import homePageMainImage from "../assets/images/homePageMainImage.png";
import Writer from "../components/Writer";

function Home() {
  return (
    <Homelayout>
      <div className="pt-10 text-white flex items-center justify-center mx-20 h-[90vh]">
        <div className="w-1/2 px-10 text-center">
          <h1 className="text-5xl font-semibold">Hi There!</h1>
          <p className="text-xl text-green-300">I'M NAGESH PANDEY</p>
          <div className="text-yellow-500 text-5xl">
            <Writer />
          </div>
        </div>
        <div className="w-1/2">
          <img src={homePageMainImage} alt="home page" />
        </div>
      </div>

      <div className="items-center justify-center w-full flex flex-col text-center">
        <div className="justify-center items-center text-3xl text-white ">
          LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
        </div>
        <p className="text-white text-xl px-20 py-10 text-center">
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
          <br />
          <br />I am fluent in classics like
          <b className="text-yellow-500">C++, Javascript</b>
          <br />
          <br />
          My fiels of Interest's are building new{" "}
          <b>Wb Technologies and Products</b>
          <br />
          <br />
          Whenever possible, I also apply my passion for developing products
          with <b className="purple">Node.js</b> and Modern{" "}
          <b>Javascript Library</b>
          and <b>Framework</b>like <b>React.js</b> and <b>Next.js</b>
        </p>
      </div>
    </Homelayout>
  );
}

export default Home;
