import { useEffect, useState } from "react";

const useFetch = (url) => {

    let [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                // console.log(res)
                if (!res.ok) {
                    throw Error('ERROR!! -- could not reach the data for that resource');
                }
                return res.json()
            })
            .then((data) => {
                setData(data)
                setIsPending(false)
                setError(null);
            })
            .catch(err => {
                // console.error(err);
                setError(err.message);
                setIsPending(false)
            })
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;