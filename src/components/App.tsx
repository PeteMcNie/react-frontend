import React from 'react'
import { Route } from 'react-router-dom'

import Index from './home/Home'

const App: React.FunctionComponent = () => {
    return (
        <>
            <Route exact path='/' component={Index} />
        </>
    )
}

export default App
