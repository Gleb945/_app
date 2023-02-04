import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';

function product() {
  
  return (
    <div className="min-h-full bg-gray-300">
      <Head>
        <title>OverLap Navigation | Product</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-8xl my-20 md:mx-10  max-h-full bg-white py-6 sm:px-6 lg:px-8 absolute top-20 right-0 bottom-0 left-0 rounded-lg">
          <div className="px-4 py-6 sm:px-0 h-full">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-full flex justify-center items-center flex-col">
              <h3 className="md:text-3xl text-lg mb-20 text-black text-bold">Product Page</h3>
              <Link href="/">
                <a>Home Page</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default product;
