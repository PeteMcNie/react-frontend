import React from 'react'
import axios from "axios"
import { useQuery } from "react-query"

interface FetchData {
    id: string
    created: Date
    name: string
    count: number
}

// interface FetchAllData {
//     fetchAllData: FetchData
// }

const fetchData = async () => {
    const res = await axios.get(`http://127.0.0.1:5000/test/test-get-all`)
    console.log(`In fetchData: ${res.data} ${res.status}`)
    console.log(typeof(res.data))
    return res.data
} 

const Home: React.FunctionComponent = () => {
    const { data, status } = useQuery('test', fetchData)
    console.log(`1 ${data} ${status}`)

    // const [data, useData] = useState<FetchAllData>()
    // console.log(`2 ${data}`)

    return (
        <>
            <div>
                <h1>Index page</h1>
                <p>this is the main page currently</p>
            </div>
            <div>
                {status === 'error' && <p>Error attempting to fetch data</p>}
                {status === 'loading' && <p>Loading...</p>}
                {status === 'success' && data && (
                    <div>
                        {data.map((res: string) => (
                            console.log(res),
                            // console.log(`In map: ${res.id} ${res.created}`),
                            // <p key={res.id}>{res.id} {res.created} {res.name} {res.count}</p>
                            <p key={res}>{res}</p>
                        ))}
                    </div>
                )}
            </div>  
        </>
    )
}

export default Home
