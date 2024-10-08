import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="relative z-50 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-white md:text-6xl lg:text-7xl">
            Revolutionize Your Content Creation with AI
          </h1>
          <p className="mb-10 text-lg font-medium text-gray-100 lg:text-xl sm:px-16 xl:px-48">
            Leverage cutting-edge AI tools to effortlessly generate engaging
            content for Instagram, YouTube, code snippets, grammar checks, and
            more.
          </p>
          <div className="flex justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-all duration-300 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-900"
            >
              Start Creating
              <svg
                className="ml-2 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
        <h2 className="font-bold text-4xl text-gray-900">How It Works</h2>
        <h3 className="text-lg text-gray-600">
          Generate Professional-Grade Content in 3 Simple Steps
        </h3>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
            href="#"
          >
            <AtomIcon className="h-10 w-10 text-white" />

            <h2 className="mt-6 text-2xl font-bold text-white">
              Choose Your Tool
            </h2>

            <p className="mt-2 text-sm text-white">
              Select the AI tool that best suits your content needs, from social
              media posts to code generation.
            </p>
          </a>

          <a
            className="block rounded-xl bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
            href="#"
          >
            <Edit className="h-10 w-10 text-white" />

            <h2 className="mt-6 text-2xl font-bold text-white">
              Provide Input Details
            </h2>

            <p className="mt-2 text-sm text-white">
              Input the required information to generate tailored content
              quickly and efficiently.
            </p>
          </a>

          <a
            className="block rounded-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
            href="#"
          >
            <Share2 className="h-10 w-10 text-white" />

            <h2 className="mt-6 text-2xl font-bold text-white">
              Receive AI-Generated Content
            </h2>

            <p className="mt-2 text-sm text-white">
              Instantly access high-quality content generated by our advanced AI
              algorithms.
            </p>
          </a>
        </div>

        <div className="mt-16">
          <a
            href="/dashboard"
            className="inline-block rounded bg-pink-600 px-12 py-4 text-lg font-medium text-white hover:bg-pink-700 transition-all duration-300 focus:outline-none focus:ring focus:ring-pink-400"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>
    </div>
  );
}
