import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import jeloImg from "../../assets/images/about-team-img/jelo.png";
import kaelImg from "../../assets/images/about-team-img/kael.png";
import jpImg from "../../assets/images/about-team-img/jp.png";
import russelImg from "../../assets/images/about-team-img/russel.png";
import ifaImg from "../../assets/images/about-team-img/ifa.png";
import josephImg from "../../assets/images/about-team-img/joseph.png";
import kielImg from "../../assets/images/about-team-img/kiel.png";
import kyleImg from "../../assets/images/about-team-img/kyle.png";
import cyrusImg from "@/assets/images/about-team-img/cyrus.png";

import teamBg from "../../assets/images/about-team-img/team-bg.png";
import {
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaHandHoldingHeart,
} from "react-icons/fa";
import campusesBg from "../../assets/images/campuses-bg.png";

const features = [
  {
    title: "Innovation-Driven",
    description:
      "We focus on solving real student and teacher problems with creativity and the latest technology.",
    icon: <FaLightbulb className="text-brand text-2xl md:text-3xl" />,
  },
  {
    title: "User-Friendly Design",
    description:
      "Our platform ensures ease of navigation and accessibility for everyone.",
    icon: <FaRocket className="text-brand text-2xl md:text-3xl" />,
  },
  {
    title: "Collaborative Teamwork",
    description:
      "Built by passionate students who believe in teamwork and shared goals.",
    icon: <FaUsers className="text-brand text-2xl md:text-3xl" />,
  },
];

const values = [
  {
    title: "Keep It Short",
    description:
      "Your values should be easy for your employees to memorize and epitomize.",
    icon: <FaHandHoldingHeart className="text-brand text-3xl" />,
  },
  {
    title: "Be Clear",
    description:
      "Ensure that your values are clear and understandable, providing guidance for everyday actions.",
    icon: <FaLightbulb className="text-brand text-3xl" />,
  },
  {
    title: "Be Realistic",
    description:
      "Values should be achievable and realistic, aligning with the organization's goals and resources.",
    icon: <FaUsers className="text-brand text-3xl" />,
  },
  {
    title: "Lead by Example",
    description:
      "Leaders must demonstrate values through their actions to encourage others to follow.",
    icon: <FaRocket className="text-brand text-3xl" />,
  },
];

const teamMembers = [
  {
    name: "Mark Angelo Reyes",
    role: "Front End Developer",
    image: jeloImg,
    description:
      "Hi, I'm Jelo. I love designing websites and transforming those designs into functional, real-life. I'm passionate about exploring new ideas and technologies.",
    socialLinks: {
      facebook: "https://www.facebook.com/dyelo1107/",
      instagram: "https://www.instagram.com/dyeloo1107/",
      twitter: "#",
    },
  },
  {
    name: "Joseph Bacani",
    role: "Back End Developer",
    image: josephImg,
    description:
      "Hello, I am Joseph! I love backend development, creating efficient systems, optimizing performance, and building scalable, impactful digital solutions.",
    socialLinks: {
      facebook: "https://www.facebook.com/joseph.bacani.3152",
      instagram: "",
      twitter: "https://x.com/JosephB3265",
    },
  },
  {
    name: "Ezekiel Carreon",
    role: "Front End Developer",
    image: kaelImg,
    description:
      "Hello, I'm Ezekiel. An aspiring front-end developer who loves to  craft responsive and impressive animations for the web.",
    socialLinks: {
      facebook: "https://www.facebook.com/npmkael/",
      instagram: "https://www.instagram.com/kiel.crrn/",
      twitter: "#",
    },
  },
  {
    name: "Ezekiel Catli",
    role: "Front End Developer",
    image: kielImg,
    description:
      "Hi, I’m Zeke! I design websites, transform them into functional projects, and explore innovative ideas with new technologies.",
    socialLinks: {
      facebook: "https://www.facebook.com/kiel.catli/",
      instagram: "https://www.instagram.com/zekeron_/",
      twitter: "#",
    },
  },
  {
    name: "Ifa De La Rosa",
    role: "Front End Developer",
    image: ifaImg,
    description:
      "Hello, Ifa here! I’m passionate about web designing and mostly game development. I always love crafting my imagination into reality using the technology we have now. Nice to meet you!",
    socialLinks: {
      facebook: "https://www.facebook.com/starg4zer1/",
      instagram: "https://www.instagram.com/ifadlcrz/",
      twitter: "https://x.com/reinyskies_",
    },
  },
  {
    name: "Russel Guinto",
    role: "Front End Developer",
    image: russelImg,
    description:
      "Hi, I'm Russ! I enjoy creating pixel art and playing games. I aspire to become a game developer and share my love for games.",
    socialLinks: {
      facebook: "https://www.facebook.com/russgold22",
      instagram: "https://www.instagram.com/russgold22/",
      twitter: "https://x.com/AurumXion",
    },
  },
  {
    name: "Cyrus Ezekiel Macapagal",
    role: "UX/UI Designer",
    image: cyrusImg,
    description:
      "Hello, Cyrus here. I love games, especially strategic ones. I want to be a game developer.",
    socialLinks: {
      facebook: "https://www.facebook.com/Alpheur/",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "John Patrick Mercado",
    role: "Back End Developer",
    image: jpImg,
    description:
      "Hi, I'm JP, AKA Sush1sui, an aspiring full-stack developer driven by a passion for learning and growing in the ever-evolving field of software development. I love exploring new technologies and creating Discord bots for fun.",
    socialLinks: {
      facebook: "https://www.facebook.com/johnpatrick.mercado.16/",
      instagram: "https://www.instagram.com/sush1sui/",
      twitter: "https://x.com/Sush1sui",
      github: "https://github.com/Sush1sui",
    },
  },
  {
    name: "Kyle Anthony Nulud",
    role: "Back End Developer",
    image: kyleImg,
    description:
      "Hello, I am Kyle. I love analyzing data and interpreting them. I currently plan to be a cross platform developer.",
    socialLinks: {
      facebook: "https://www.facebook.com/kyannu.v",
      instagram: "https://www.instagram.com/kyannu_v/",
      twitter: "https://x.com/kyannu_v",
    },
  },
];

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "About Us | DHVSU E-Learning Hub";
  }, []);

  return (
    <>
      {/* banner */}
      <div
        className="bg-cover bg-no-repeat h-[100px] w-full flex justify-center items-center md:h-[195px] lg:h-[260px] xl:h-[390px]"
        style={{ backgroundImage: `url(${campusesBg})` }}
      >
        <div>
          <h1 className="font-bold text-white text-xl md:text-3xl lg:text-4xl xl:text-6xl">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* main */}
      <div className="container-base max-w-screen-xl mx-auto p-4 lg:mt-10 flex flex-col">
        <div className="flex flex-col items-center text-center gap-4">
          {/* intro */}
          <h1 className="text-2xl font-bold text-brand md:text-3xl lg:text-5xl">
            Who We Are
          </h1>
          <p className="text-sm text-brand  md:text-base lg:text-3xl  max-w-screen-xl">
            We are a dedicated team working to improve the online experience for
            both students and faculty. Our platform simplifies communication,
            assignments, and learning resources, helping students and faculty
            engage and collaborate more efficiently.
          </p>
        </div>

        {/* feature */}
        <div className="grid gap-4 mt-8 grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg flex items-center gap-4 p-3 md:p-4"
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h2 className="font-bold text-brand text-base md:text-lg lg:text-xl">
                  {feature.title}
                </h2>
                <p className="text-xs md:text-sm lg:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* values */}
        <div className="mt-12 text-center bg-brand w-full py-8 px-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl mb-6">
            How to Define Our Values
          </h2>
          <div className="grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group perspective w-full h-56 md:h-72 lg:h-80"
              >
                <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500">
                  {/* front */}
                  <div className="absolute w-full h-full bg-white shadow-md rounded-lg flex flex-col items-center justify-center backface-hidden p-6">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="font-bold text-lg text-brand">
                      {value.title}
                    </h3>
                    <p className="text-xs text-gray-600">{value.description}</p>
                  </div>

                  {/* back */}
                  <div className="absolute rotate-y-180 w-full h-full bg-white border-2 border-brand z-50 rounded-3xl overflow-hidden p-6 flex items-center justify-center backface-hidden">
                    <div className="text-center">
                      <h3 className="font-bold text-xl text-brand mb-4">
                        {value.title}
                      </h3>
                      <p className="text-base text-brand">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* meet the team section */}
        <div className="max-w-screen-xl lg:mt-10 flex flex-col justify-center items-center py-4">
          <div className="text-center max-w-screen-lg mx-auto">
            <h1 className="text-brand font-bold uppercase text-5xl lg:text-5xl">
              Meet The Team
            </h1>
            <hr className="mb-5 mt-2 w-full border-t-[5px] rounded-full border-brand" />
          </div>

          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`relative w-full max-w-[250px] mx-auto rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out bg-gradient-to-r from-brand via-[#854335] to-[#935B4F]`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* top bg and profile */}
                <div
                  className={`relative transition-all duration-500 ${
                    hoveredIndex === index ? "h-[100px]" : "h-[150px]"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    backgroundImage: `url(${teamBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`absolute inset-0 ${
                      hoveredIndex === index ? "blur-none" : "blur-sm"
                    } transition-all duration-500`}
                    style={{
                      backgroundImage: `url(${teamBg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter:
                        hoveredIndex === index ? "blur(2px)" : "blur(2px)",
                    }}
                  ></div>

                  {/* prfole img */}
                  <div
                    className={`absolute w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white transition-all duration-500 left-1/2 transform -translate-x-1/2`}
                    style={{
                      top: hoveredIndex === index ? "80px" : "30px",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover bg-white"
                    />
                  </div>
                </div>

                {/* bottom info */}
                <div
                  className={`p-4 bg-white  shadow-lg transform transition-all duration-500 ${
                    hoveredIndex === index
                      ? "translate-y-[-20px] rounded-lg"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    height: "200px",
                    width: "100%",
                  }}
                >
                  {/* <h3 className="text-xl font-bold text-brand ">
                    {member.name}
                  </h3> */}
                  <h3
                    className={`text-xl font-bold text-brand ${
                      hoveredIndex === index
                        ? ""
                        : "text-[30px] mt-10 text-center"
                    }`}
                  >
                    {member.name}
                  </h3>

                  <p
                    className={`text-sm text-brand ${
                      hoveredIndex === index
                        ? ""
                        : "text-[15px] mt-2 text-center "
                    }`}
                  >
                    {member.role}
                  </p>

                  <p
                    className={`text-xs text-gray-600 mt-2 transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 visibility-visible"
                        : "opacity-0 visibility-hidden"
                    }`}
                  >
                    {member.description}
                  </p>

                  <div
                    className={`mt-3 flex gap-3 transition-all duration-300 ${
                      hoveredIndex === index
                        ? "opacity-100 visibility-visible"
                        : "opacity-0 visibility-hidden"
                    }`}
                  >
                    <a
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="text-brand" />
                    </a>
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="text-brand" />
                    </a>
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="text-brand" />
                    </a>
                    {member.socialLinks.github ? (
                      <a
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-brand" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
