import { AtomIcon, Edit, Share2 } from "lucide-react";
import React from "react";

function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
      <h2 className="font-bold text-4xl text-gray-900">How It Works</h2>
      <h3 className="text-lg text-gray-600">
        Create Engaging Content in 3 Simple Steps
      </h3>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a
          className="block rounded-xl bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500 p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
          href="#"
        >
          <AtomIcon className="h-10 w-10 text-white" />

          <h2 className="mt-6 text-2xl font-bold text-white">
            Choose Your Content Type
          </h2>

          <p className="mt-2 text-sm text-white">
            Select whether you want to generate blog content, YouTube tags,
            descriptions, or blog topic ideas.
          </p>
        </a>

        <a
          className="block rounded-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
          href="#"
        >
          <Edit className="h-10 w-10 text-white" />

          <h2 className="mt-6 text-2xl font-bold text-white">
            Customize Your Input
          </h2>

          <p className="mt-2 text-sm text-white">
            Provide specific details, such as keywords, topics, or themes, to
            tailor the generated content to your needs.
          </p>
        </a>

        <a
          className="block rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
          href="#"
        >
          <Share2 className="h-10 w-10 text-white" />

          <h2 className="mt-6 text-2xl font-bold text-white">
            Generate and Share Content
          </h2>

          <p className="mt-2 text-sm text-white">
            Instantly receive AI-generated content and easily share or publish
            it to your desired platforms.
          </p>
        </a>
      </div>
    </section>
  );
}

export default HowItWorks;
