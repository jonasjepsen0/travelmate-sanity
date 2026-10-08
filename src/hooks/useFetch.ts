import { useEffect, useState } from 'react'

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const jsonData: T = await response.json()

        setData(jsonData)
      } catch (err) {
        setError((err as Error).message)
      }
    }

    fetchData()
  }, [url])

  return { data, error }
}
