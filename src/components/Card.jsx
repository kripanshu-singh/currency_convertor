import React from "react";

const Card = ({
    label,
    amount,
    onAmountChange,
    currList = ["select"],
    onCurrTypeChange,
    disabled,
    currType,
}) => {
    return (
        <div className="rounded w-72 m-4 shadow-xl flex flex-col text-gray-200">
            <p className="font-semibold bg-white bg-opacity-20 rounded-t px-4 py-2">
                {label}
            </p>

            <div className="flex flex-row items-center pt-8 bg-white bg-opacity-10 pl-12 pr-10 gap-3">
                <div>
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        {/* Price */}
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                        <input
                            disabled={disabled}
                            value={amount}
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 py-1.5 pl-1 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="0.00"
                            onChange={(e) => onAmountChange?.(e.target.value)} // Optional chaining
                        />

                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                                Currency
                            </label>
                            <select
                                id="currency"
                                name="currency"
                                className="h-full rounded-md border-0 py-0  bg-indigo-100 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm cursor-pointer shadow"
                                value={currType}
                                onChange={(e) =>
                                    onCurrTypeChange?.(e.target.value)
                                }
                            >
                                {currList.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center bg-white bg-opacity-10 pt-5 pb-10"></div>
        </div>
    );
};

export default Card;
