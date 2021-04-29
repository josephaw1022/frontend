import { Button } from "reactstrap"
import { Row, Col, Card } from "reactstrap"
import { CountStore } from "./Reducers"
import { Fetcher, postData } from "./API/FetcherandPoster"
import { useContext, useState, useEffect, useCallback } from "react"

export const ButtonRow = () => {
  const [savedData, handleSavedData] = useState({})
  const [apiData, handleData] = useState({})
  const [iter, iterInc] = useState(0)
  const { stateValue, dispatch } = useContext(CountStore)
  const THROTTLE = 4

  const upgrade = useCallback(() => {
    if (iter < THROTTLE) {
      iterInc(iter + 1)
    }
  }, [iter])

  useEffect(() => {
    const fetchAPI = async () => {
      upgrade()
      const data = await Fetcher()
      if (data) {
        handleData(data)
        handleSavedData(apiData)
        dispatch({ type: "startup", payload: savedData })
      }
    }

    const initialize = async () => {
      await fetchAPI()
      upgrade()
      if (savedData.length > 1) {
        const obj = apiData[0]
        stateValue.count = obj.count
        dispatch({ type: "upload", payload: savedData })
      }
    }
    initialize()
  }, [iter])

  return (
    <>
      <Row style={{ marginTop: "100px" }}>
        <Col>
          <Card className={"myCard"}>
            <Row>
              <Col style={{ alignItems: "center" }}>
                <Button
                  className={"myButton"}
                  onClick={() => {
                    dispatch({ type: "reload", payload: apiData[0].count })
                  }}
                >
                  Last Saved Value
                </Button>
              </Col>
              <Col style={{ alignItems: "center" }}>
                <Button
                  className={"myButton"}
                  onClick={() => {
                    const temp0 = apiData[0]
                    temp0.count = stateValue.count
                    const temp = temp0
                    postData(temp)
                    dispatch({ type: "save", payload: stateValue })
                  }}
                >
                  Save
                </Button>
              </Col>
              <Col style={{ alignItems: "center" }}>
                <Button
                  className={"myButton"}
                  onClick={() => {
                    if (apiData.length > 1) {
                      console.log(apiData[0].count)
                      dispatch({ type: "increment", payload: apiData[0].count })
                      upgrade()
                    }
                  }}
                >
                  +
                </Button>
              </Col>

              <Col>
                <Button
                  className={"myButton"}
                  onClick={() => {
                    if (apiData.length > 1) {
                      console.log(apiData[0].count)
                      dispatch({ type: "decrement", payload: apiData[0].count })
                      upgrade()
                    }
                  }}
                >
                  -
                </Button>
              </Col>
              <Col>
                <Button
                  className={"myButton"}
                  onClick={() => {
                    dispatch({ type: "reset", payload: stateValue })
                    let temp = apiData[0]
                    temp.count = 0
                    postData(temp)
                  }}
                >
                  Reset
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ButtonRow
