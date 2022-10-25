import React from 'react'
import { useAppSelector } from '../../app/hooks'

export const PostsList: React.FunctionComponent = () => {
  const posts = useAppSelector(state => state.posts)

  const renderedPosts = posts.map((post: any) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </div>
  ))

  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  )
}
