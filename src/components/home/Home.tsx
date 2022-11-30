import React from "react"
import axios from "axios"
import { useQuery } from "react-query"

interface ExampleTableData {
  id: string
  created: string
  name: string
  count: number
}

const axios_ = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
})

const fetchAllData = async () => {
  const res = await axios_.get(`/example/example-get-all`)
  return res.data
}

const fetchData = async (count: number) => {
  const res = await axios_.get(`/example/example-get-one/${count}`)
  return res.data
}

const Home: React.FunctionComponent = () => {
  const { data, status } = useQuery(["example_table"], fetchAllData)

  const count = 2
  const response = useQuery(["example_table", 1, count], () =>
    fetchData(count)
  )
  console.log(`2 ${response.data} ${typeof response.data} ${response.status}`)

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
            {data.results.map((res: ExampleTableData) => (
              <p key={res.id}>
                {res.id} {res.created} {res.name} {res.count}
              </p>
            ))}
          </div>
        )}
      </div>
      <hr />
      <h5>Checking get one row</h5>
      <div>
        {response.status === "error" && (
          <p>
            Error attempting to fetch data for ONE. Do you have a terminal
            started on localhost:5000?
          </p>
        )}
        {response.status === "loading" && <p>Loading...</p>}
        {response.status === "success" && response.data && (
          <div>
            <p>
              {response.data.id} {response.data.created} {response.data.name}{" "}
              {response.data.count}
            </p>
          </div>
        )}
        {response.data?.message ? <p>{response.data?.message}</p> : null}
      </div>
      <div>
        <p>Testing image loading via scss</p>
        <div className="test-image"></div>
      </div>
    </>
  )
}

export default Home
