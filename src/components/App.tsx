import React from "react"
import { Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import "../assets/styles/main.scss"

import Index from "./home/Home"

const queryClient = new QueryClient()

const App: React.FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Route exact path="/" component={Index} />
    </QueryClientProvider>
  )
}

export default App
