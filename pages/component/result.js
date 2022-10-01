import react, { useState, useEffect } from 'react';

const result = ({results}) => {
    let [bg, setbg] = useState("");

    useEffect(() => {
        setBackground()
    });

    const setBackground = () => {
        let min = results.total - results.variant;
        let max = results.total + results.variant;

        if (results.total >= min && results.total <= max) {
            setbg("bg-green-500");
        }
        else if (result.total < min) {
            setbg("bg-blue-500");
        }
        else{
            setbg("bg-red-500");
        }
    }

    return (
        <div className={bg + 'w-1/3 p-4 text-white'}>
            <h2 className="text-3xl font-bold">
                {results.total}
                <div className='flex text-sm p-4'>
                    <div className='w-1/3'>{results.total - results.variant}</div>
                    <div className='w-1/3'>{results.target}</div>
                    <div className='w-1/3'>{results.total + results.variant}</div>
                </div>
            </h2>
            <h3 className="text-xl">{results.label}</h3>
        </div>
    )
}