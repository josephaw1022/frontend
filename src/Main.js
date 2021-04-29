import { useContext, useEffect, useState } from "react"
import { Row, Col, Card } from "reactstrap"
import { CountStore } from "./Reducers"

export const Main = () => {
  const { stateValue } = useContext(CountStore)
  const [localStateValue, handleLocal] = useState({})
  const [useAgain, dontUseAgain] = useState(false)

  useEffect(() => {
    const render = async () => {
      await stateValue
      handleLocal(stateValue)
      dontUseAgain(true)
    }

    const handleUpdate = () => {
      handleLocal(stateValue)
    }

    if (!useAgain) {
      render()
    }
    handleUpdate()
  }, [stateValue, useAgain])

  return (
    <>
      <Row
        className={"myRow"}
        style={{ marginTop: "100px", textAlign: "center" }}
      >
        <Col>
          <Card className={"myCard"}>
            <Row>
              <Col>
                <h1>Current Count:</h1>
              </Col>
              <Col>
                <h1>{localStateValue.count ? localStateValue.count : 0}</h1>
              </Col>
              <Col>
                <h2> Change from last value </h2>
              </Col>
              <Col>
                <h1> {localStateValue.name ? localStateValue.name : 0}</h1>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row></Row>
    </>
  )
}

export default Main
