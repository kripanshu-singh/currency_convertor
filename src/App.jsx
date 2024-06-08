import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import useCurencyConverter from "./hooks/CurrHook";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [result, setResult] = useState(0);

    const conversionRates = useCurencyConverter(from);
    const list = Object.keys(conversionRates);

    return (
        <div className="blackPink rounded-2xl flex flex-col justify-center items-center bg-gradient-to-t from-indigo-600 via-indigo-700 to-indigo-700">
            <Card
                label="From"
                amount={amount}
                currList={list}
                currType={from}
                onAmountChange={(value) => setAmount(Number(value))}
                onCurrTypeChange={(value) => setFrom(value)}
            />
            <button
                onClick={() =>
                    setResult((conversionRates[to] * amount).toFixed(3))
                }
                className="top-auto group absolute overflow-hidden bg-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex items-center px-7 py-2 rounded-lg text-white justify-center shadow-lg shadow-indigo-950"
            >
                <span className="z-40">Convert</span>
                <svg
                    className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1"
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
                <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000 "></div>
            </button>
            <Card
                label="To"
                disabled
                currType={to}
                amount={result}
                currList={list}
                onCurrTypeChange={(value) => setTo(value)}
            />
        </div>
    );
}

export default App;
