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
                setIsLoading(false)
                path === "/" ? setData(response.data.results) : setData(response.data)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(true)
                console.log(error.response.data)
            })
    },[path])

    return [ data, isLoading, error ]
}