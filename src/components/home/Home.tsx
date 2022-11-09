import React from "react"
import axios from "axios"
import { useQuery } from "react-query"

interface TestTable {
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
  const res = await axios_.get(`/test/test-get-all`)
  return res.data
}

const fetchData = async (resultToGet: number) => {
  const res = await axios_.get(`/test/test-get-one/${resultToGet}`)
  return res.data
}

const Home: React.FunctionComponent = () => {
  const { data, status } = useQuery(["test_table"], fetchAllData)
  console.log(`1 ${data} ${typeof data} ${status}`)

  const resultToGet = 1
  const response = useQuery(["test_table", 1, resultToGet], () =>
    fetchData(resultToGet)
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
            {data.map((res: TestTable) => (
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
        {status === "error" && (
          <p>
            {response.data.message}
            Error attempting to fetch data for ONE. Do you have a terminal
            started on localhost:5000?
          </p>
        )}
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && response.data && (
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
