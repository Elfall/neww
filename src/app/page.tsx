import React from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div>
        <h2 className="text-2xl font-semibold text-center border p-4 font-mono rounded-md">
          Get started by choosing a template path from the /paths/ folder.
        </h2>
      </div>
      <div>
        <h1 className="text-6xl font-bold text-center">Make anything you imagine 🪄</h1>
        <h2 className="text-2xl text-center font-light text-gray-500 pt-4">
          This whole page will be replaced when you run your template path.
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* ... rest of your component ... */}
      </div>
    </main>
  );
};

export default Home;
