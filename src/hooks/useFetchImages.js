
import { useCallback, useEffect, useState } from 'react'


export const useFetchImages = () => {
    const [images, setImages] = useState([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(true)

    const peticion = useCallback(async () => {

        const key = "client_id=3H516dDIPOgaJaMNiimPnCh9dh1e4GAYawjiD1sOByo"

        var route = `https://api.unsplash.com/photos/?${key}`

        if (input !== "") {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`
        }

        setLoading(true)

        const res = await fetch(route)
        const data = await res.json()

        if (data.results) {
            setImages(data.results)
        } else {
            setImages(data)
        }

        setLoading(false)
    }, [input])



    useEffect(() => {
        peticion()

    }, [peticion]);



    const handleSubmit = (e) => {
        e.preventDefault()
        const busqueda = e.target[0].value

        setInput(busqueda)
    }


    return [images, loading, handleSubmit]
}



