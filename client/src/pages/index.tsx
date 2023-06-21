import Head from "next/head";
import Link from "next/link";
import Homepage from "~/components/Homepage";
import Navbar from "~/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="background-homepage flex min-h-screen flex-col  bg-gray-900 px-8 pb-4 text-white">
        <Navbar />
        <Homepage />
      </div>
    </>
  );
}