import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(url)
            .then(response => {
                console.log(response.data)
                setIsLoading(false)
                setData(response.data)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(true)
                console.log(error.response.data)
            })

    },[])

    return { data, setData, isLoading, error }
}