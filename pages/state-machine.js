import { wtfMachine } from "../lib/machine"
import { useMachine } from "@xstate/react"

const StateMachine = () => {
  const [current, send] = useMachine(wtfMachine)
  const { image } = current.context

  return (
    <section>
      {current.matches("ready") && (
        <button onClick={() => send("BUTTON_CLICKED")}>Get Image</button>
      )}
      {current.matches("fetching") && <p>loading...</p>}
      {current.matches("success") && <img src={image} />}
      {current.matches("error") && <p>An error occured</p>}
    </section>
  )
}

export default StateMachine
