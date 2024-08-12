import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-12 bg-white shadow-2xl rounded-lg overflow-hidden lg:max-w-screen-lg">
        <section
          className="relative lg:col-span-5 xl:col-span-6 flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
          }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Welcome to AI Content Generator
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Unleash your creativity with AI-powered tools for generating
              content across various platforms, including blogs, social media,
              and more.
            </p>
          </div>
        </section>

        <main className="lg:col-span-7 xl:col-span-6 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sign In to Your Account
            </h1>
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
