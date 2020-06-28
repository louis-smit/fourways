import { useState } from "react"
import useSWR from "swr"
import { fetchImage } from "../lib/fetch-image"

const SWR = () => {
  const [clicked, setClicked] = useState(false)
  const { data, error } = useSWR(clicked && "wtf", fetchImage)

  if (error) return <p>error...</p>
  if (!data && clicked) return <p>loading...</p>

  return (
    <section>
      <img src={data} />
      <button onClick={() => setClicked(true)}>Get Image</button>
    </section>
  )
}

export default SWR
