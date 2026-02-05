import { posts } from './data/posts'
import { useState } from 'react'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import './App.css'

function App() {
  const [postList] = useState(posts);
  const [selectedPost, setSelectedPost] = useState(posts[0]);

  return (
    <>
      <PostList posts={postList} onSelect={setSelectedPost} />
      <PostDetail post={selectedPost} />
    </>
  )
}

export default App
