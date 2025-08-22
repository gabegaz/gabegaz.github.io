'use client';

import Image from 'next/image';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'; // Icons from react-icons/fa
import { AiOutlineMail } from 'react-icons/ai'; // Mail icon from react-icons/aiimport projects from './skills/skills'; // Import your skills data
import skills from './home/skills'; // Import your skills data


export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content xs:p-6 md:p-6 lg:p-68 mt-20">
      {/* Hero Section */}

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        {/* Photo Placeholder */}
        {/* Gentle Intro */}
        <div className="flex-1 mt-8 px-2">
          <h1 className="text-2xl md:text-3xl font-normal mb-4">
            Hi, I&apos;m <span className="">Getachew</span></h1>
          <p className="text-lg md:text-xl mb-4">
            I&apos;m a data science/research analysis consultant helping organizations use data and AI to uncover insights, make smarter decisions, automate tasks and drive growth. I specialize in turning complex data into actionable strategies through advanced analytics and automation.
          </p>
        </div>


        <div className="w-60 h-70 md:w-70 md:h-75 rounded-full overflow-hidden bg-base-100 flex items-center justify-center"> {/* Explicitly set to bumblebee's base-100 */}
          <Image
            src="/04-removebg.png"
            alt="Getachew"
            width={256}
            height={256}
            className="obobject-cover"
          />
        </div>
      </div>


      {/* Skills Section */}
      <div className="mb-12">
        {/* <h2 className="text-3xl font-normal mb-6">What I Do</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="card bg-base-200 shadow-lg">
              <div className="card-body bg-white">
                <h3 className="card-title text-xl font-bold text-blue-800">{skill.title}</h3>
                <p className="text-base">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration Callout */}
      <div className="text-primary-content p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-normal mb-4 text-blue-800">Open to Collaboration</h2>
        <p className="text-lg">
          I&apos;m open to collaborating with innovative teams, investors, and organizations to transform data into tangible business value.
        </p>
      </div>


      {/* Find Me Section */}
      <div className="text-center">
        <h5 className="text-2xl font-bold mb-4">Find Me On</h5>
        <ul className="flex justify-center gap-6">
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/gabegaz/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="mailto:getabegaz@gmail.com"
              className="text-3xl text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              <AiOutlineMail />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://wa.me/251911480370"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
