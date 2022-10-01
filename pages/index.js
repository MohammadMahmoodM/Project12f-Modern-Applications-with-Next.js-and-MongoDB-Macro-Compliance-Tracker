import { useState } from 'react';
import Head from 'next/head';
import Result from './component/result';
import MCTForm from './component/MCTForm';

export default function Home() {

  let data = {
    calories: {
      label: "Calories",
      total: 1840,
      target: 1840,
      variant: 15
    },
    carbs: {
      label: "Carbs",
      total: 190,
      target: 160,
      variant: 15
    },
    fat: {
      label: "Fat",
      total: 55,
      target: 60,
      variant: 10
    },
    protein: {
      label: "Protein",
      total: 120,
      target: 165,
      variant: 10
    }
  }

  const [results, setResults] = useState(data);

  const onChange = (e) => {
    const data = { ...results };

    let name = e.target.name;

    let resultType = name.split(" ")[0].toLowerCase();
    let resultMacro = name.split(" ")[1].toLowerCase();

    data[resultMacro][resultType] = e.target.value;

    setResults(data);
  }
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

        <div className="flex mb-4 text-center">
          <Result results={results.calories} />
          <Result results={results.carbs} />
          <Result results={results.fat} />
          <Result results={results.protein} />
        </div>

        <div className="flex">
          <MCTForm data={results} item="Total" onChange={onChange} />
          <MCTForm data={results} item="Target" onChange={onChange} />
          <MCTForm data={results} item="Variant" onChange={onChange} />
        </div>

        <div className="flex text-center">
        <div className="w-full m-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
          </button>
        </div>
      </div>

      </div>
    </div>
  )
}