import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"

export const useRequestData = (initialState, path) => {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`${BASE_URL}${path}`)
            .then(response => {
                console.log(response.data.results)
                setIsLoading(false)
                setData(response.data.results)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(true)
                console.log(error.response.data)
            })
    },[path])

    return [ data, setData, isLoading, error ]
}