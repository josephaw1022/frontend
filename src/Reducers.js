import { createContext } from "react"

export const initialCount = {
  count: 0,
  name: "",
  api_data: {},
}

export const CountStore = createContext({
  initialCount,
  reducer: () => {},
})

export const init = () => {
  return initialCount
}

export const CountReducer = (state, action) => {
  switch (action.type) {

    case "increment":
    
      return {
        count: parseInt(state.count)+1,
        name: state.count + 1 - action.payload,
        api_data: state.api_data,
      }
    case "decrement":
      return {
        count: parseInt(state.count) - 1,
        name: state.count + 1 - action.payload,
        api_data: state.api_data,
      }
    
    case "reset":
      return {
        count: 0,
        name: String(-1 * action.payload.count),
        api_data: state.api_data,
      }

    case "upload":
      return state

    case "save":
      return action.payload

    case "startup":
      let temp = null
      if (action.payload.length > 1) {
        temp = action.payload[0].count
      }
      return {
        count: temp,
        name: null,
        api_data: action.payload,
      }

    case "reload":
      return {
        count: action.payload,
        name: String(action.payload - state.count),
        api_data: action.payload.api_data,
      }
    default:
      throw new Error()
  }
}
