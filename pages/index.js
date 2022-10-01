import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" /> 
        {/* tailwind css added */}
      </Head>

<div className="container mx-auto">
        <div className="flex text-center">
          <div className="w-full m-4">
            <h1>Macro Compliance Tracker</h1>
          </div>
        </div>
        <div class="flex text-center">
          <div class="w-1/3 bg-gray-200 p-3">Previous Day</div>
          <div class="w-1/3 p-6">10/1/2022</div>
          <div class="w-1/3 bg-gray-200 p-3">Next day</div>
        </div>
        <div class="flex bg-gray-200 text-center">
          <div class="w-1/3 p-4 bg-green-500 text-white">
            <h2 className="text-3xl font-bold">1850
              <div class="flex text-sm p-3">
                <div class="w-1/3">1700</div>
                <div class="w-1/3 font-bold">1850</div>
                <div class="w-1/3">2000</div>
              </div>
            </h2>
            <h3 className="text-xl">Calories</h3>
          </div>

          <div class="w-1/3 p-4 bg-red-500 text-white">
            <h2 className='text-3xl font-bold'>195
              <div class="flex text-sm p-3">
                <div class="w-1/3">150</div>
                <div class="w-1/3">170</div>
                <div class="w-1/3">160</div>
              </div>
            </h2>
            <h3 className='text-xl'>Carbs</h3>
          </div>

          <div class="w-1/3 p-4 bg-green-500 text-white">
            <h2 className='text-3xl font-bold'>55
              <div class="flex text-sm p-3">
                <div class="w-1/3">50</div>
                <div class="w-1/3">60</div>
                <div class="w-1/3">70</div>
              </div>
            </h2>
            <h3 className='text-xl'>Fat</h3>
          </div>

          <div class='w-1/3 p-4 bg-blue-500 text-white'>
            <h2 className='text-3xl font-bold'>120
              <div class="flex text-sm p-3">
                <div class='w-1/3'>145</div>
                <div class='w-1/3'>160</div>
                <div class='w-1/3'>170</div>
              </div>
            </h2>
            <h3 className='text-xl'>Protein</h3>
          </div>
        </div>

        <div className='flex text-center'>
          <div className='w-1/3'>
            <h2 className="text-3xl p-3">Results</h2>

            <div className='p-3'>
              <label className="block">Calories</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
            </div>

            <div className="p-3">
              <label className="block">Carbs</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
            </div>

            <div className="p-3">
              <label className="block">Fats</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
            </div>

            <div className="p-3">
              <label className="block">Protein</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
            </div>

            <div className="p-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </div>

          <div className='w-1/3'>
            <h2 className="text-3xl p-3">Target</h2>

            <div className='p-3'>
              <label className="block">Calories</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
            </div>

            <div className="p-3">
              <label className="block">Carbs</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
            </div>

            <div className="p-3">
              <label className="block">Fats</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
            </div>

            <div className="p-3">
              <label className="block">Protein</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
            </div>

            <div className="p-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>

          </div>

          <div className='w-1/3'>
            <h2 className="text-3xl p-3">Variance</h2>

            <div className='p-3'>
              <label className="block">Calories</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></input>
            </div>

            <div className="p-3">
              <label className="block">Carbs</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
            </div>

            <div className="p-3">
              <label className="block">Fats</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
            </div>

            <div className="p-3">
              <label className="block">Protein</label>
              <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
            </div>

            <div className="p-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
            
          </div>

        </div>

      </div>
    </div>
  )
}