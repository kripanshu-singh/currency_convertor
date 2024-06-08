import { useEffect, useState } from "react";

function useCurencyConverter(curr) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`
                );
                const result = await response.json();
                setData(result[curr]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [curr]);

    return data;
}

export default useCurencyConverter;
