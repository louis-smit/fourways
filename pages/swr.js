import { fetchImage } from "../lib/fetch-image"
import useSWR from "swr"

const SWR = () => {
  const { data, error, mutate } = useSWR("wtf")

  if (error) return <p>error...</p>

  return (
    <section>
      <img src={data} />
      <button onClick={() => mutate(fetchImage)}>Get Image</button>
    </section>
  )
}

export default SWR
