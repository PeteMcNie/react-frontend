import React from 'react'

import { PostsList } from '../features/posts/PostsList'
import { AddPostForm } from '../features/posts/AddPostForm'

const App: React.FunctionComponent = () => {
    return (
        <div>
            <h1>GOOD MORNING</h1>
            <React.Fragment>
                <AddPostForm />
                <PostsList />
            </React.Fragment>
        </div>

    )
}

export default App
