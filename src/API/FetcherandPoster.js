import axios from "axios"
const { REACT_APP_BUTTON_API_ENDPOINT, REACT_APP_URL } = process.env

export async function postData(object) {
  axios.put(
    REACT_APP_URL + REACT_APP_BUTTON_API_ENDPOINT + String(object.id) + "/",
    object
  )
}

export async function Fetcher() {
  const value = await fetch(
    REACT_APP_URL + REACT_APP_BUTTON_API_ENDPOINT + "?format=json"
  ).then((response) => response.json())

  if (value) {
    return value
  }
}
