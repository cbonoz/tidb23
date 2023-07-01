import { EXAMPLE_NAMES } from "@/api";
import NameRow from "@/components/NameRow";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Babynaming.pro | Discover your ideal baby name</title>
      </Head>

      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Discover your ideal baby name{" "}
          <span className="relative whitespace-nowrap text-orange-600">
            <SquigglyLines />
            <span className="relative">using AI</span>
            </span>
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">

        </h2>
        <Link
          className="bg-orange-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-orange-500 transition"
          href="/names"
        >
          Find your ideal baby name
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
                  {EXAMPLE_NAMES.map((res,i ) => (
                    <div key={i} className='m-4'>
                    <NameRow result={res} />
                    </div>
                  ))}
               
              </div>
          </div>
        </div>
      </main>
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
