import React, { useReducer } from "react"
import { Container } from "reactstrap"
// import { QueryClient, QueryClientProvider } from "react-query";
import { initialCount, CountReducer, CountStore } from "./Reducers"
import Main from "./Main"
import { ButtonRow } from "./ButtonRow"
import Navbar from "./Components/IndexNavbar"


export const App = () => {
  const [stateValue, dispatch] = useReducer(CountReducer, initialCount)

  const value = { stateValue, dispatch }
  return (
    <React.StrictMode>
      <CountStore.Provider value={value}>
        <Navbar />
        <Container style={{ margin: "auto" }}>
          <ButtonRow />
          <Main />
        </Container>
      </CountStore.Provider>
    </React.StrictMode>
  )
}

export default App

