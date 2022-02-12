import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaGithub, FaTwitter } from "react-icons/fa";

function about() {
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
        <div className="h-64 w-full justify-center flex">
          <img src="/about.png" className="h-64" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
          Hi,{" "}
          <span className="bg-indigo-400 text-white rounded px-1 dark:bg-indigo-500">
            I’m Tathagata
          </span>{" "}
          . Nice to meet you.
        </h2>
        <p className="text-gray-600 mt-4 dark:text-indigo-200">
          I am a Self taught Software Developer currently pursuing B.Tech in ECE
          in UEM Kolkata. My fields of Interests are building new Web
          Technologies and Products mainly on Frontend technologies.
          I am currently working as an SDE Intern in a Ed-Tech Startup, building
          products that may change the world. 
        </p>

        <div className="text-center pt-8">
          <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-indigo-600">
            <FaGithub />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.github.com/"
            >
              See My Works
            </a>
          </button>

          <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-indigo-600">
            <FaTwitter />
            <a
              className="twitter-follow-button"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/tathagata1805"
            >
              Follow Me
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
