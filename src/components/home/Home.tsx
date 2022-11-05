import React from "react"
import axios from "axios"
import { useQuery } from "react-query"

const axios_ = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
})

// interface FetchData {
//     id: string
//     created: Date
//     name: string
//     count: number
// }

// interface FetchAllData {
//     fetchAllData: FetchData
// }

const fetchAllData = async () => {
  const res = await axios_.get(`/test/test-get-all`)
  console.log(`In fetchAllData: ${res.data} ${res.status}`)
  return res.data
}

const fetchData = async (resultToGet: number) => {
  const res = await axios_.get(`/test/test-get-one/${resultToGet}`)
  console.log(`In fetchData: ${res.data} ${res.status}`)
  return res.data
}

const Home: React.FunctionComponent = () => {
  const { data, status } = useQuery("test", fetchAllData)
  console.log(`1 ${data} ${status}`)

  // const [data, useData] = useState<FetchAllData>()
  // console.log(`2 ${data}`)
  const resultToGet = 2
  const response = useQuery(["test2", resultToGet], () =>
    fetchData(resultToGet)
  )
  console.log(`2 ${response.data} ${response.status}`)

  return (
    <>
      <div>
        <h1>Index page</h1>
        <p>this is the main page currently</p>
      </div>
      <div>
        <h5>Checking get all rows</h5>
        {status === "error" && (
          <p>
            Error attempting to fetch ALL data. Do you have a terminal started
            on localhost:5000?
          </p>
        )}
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && (
          <div>
            {data.map(
              (res: string, key: number) => (
                console.log(`All rows result: ${res}`),
                (
                  // console.log(`In map: ${res.id} ${res.created}`),
                  // <p key={res.id}>{res.id} {res.created} {res.name} {res.count}</p>
                  <p key={key}>{res}</p>
                )
              )
            )}
          </div>
        )}
      </div>
      <hr />
      <h5>Checking get one row</h5>
      <div>
        {status === "error" && (
          <p>
            Error attempting to fetch data for ONE. Do you have a terminal
            started on localhost:5000?
          </p>
        )}
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && (
          <div>
            <p>{response.data}</p>
          </div>
        )}
      </div>
      <div>
        <p>Testing image loading via scss</p>
        <div className="test-image"></div>
      </div>
    </>
  )
}

export default Home
