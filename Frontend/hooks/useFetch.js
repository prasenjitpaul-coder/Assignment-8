import { useEffect } from "react";
import { useState } from "react";

const useFetch = (Url) => {
    const [data, setdata] = useState([]);
    const [err, seterr] = useState('');
    const [reload, setreload] = useState(false)
    /////   
    useEffect(() => {

        fetch(Url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("ERROR!! Could Not Fetch Items From DataBase");

                }
                return res.json()
            })
            .then((data) => {
                setdata(data)
            }).catch(error => {
                seterr(error.message)
            })

    }, [Url,reload])

    return { data, err, setreload }
}


export default useFetch;