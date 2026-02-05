import { useState } from 'react'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryList from './components/CategoryList'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'
import Footer from './components/Footer'
import { posts } from './data/posts'
import type { Post, Comment } from './data/posts'
import './App.css'

function App() {
  const [postList] = useState(posts);
  const [selectedPost, setSelectedPost] = useState<Post>(posts[0]);
  const [comments, setComments] = useState<{ [postId: number]: Comment[] }>({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddComment = (author: string, text: string) => {
    const newComment: Comment = {
      id: crypto.randomUUID(),
      postId: selectedPost.id,
      author,
      text,
      timestamp: "Just now"
    };

    setComments(prev => ({
      ...prev,
      [selectedPost.id]: [newComment, ...(prev[selectedPost.id] || [])]
    }));
  };

  const currentComments = comments[selectedPost.id] || [];

  const filteredPosts = postList.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar onHomeClick={() => setSearchTerm("")} />
      <Hero searchTerm={searchTerm} onSearch={setSearchTerm} />

      <div className="container layout-container">
        <aside className="layout-sidebar-left">
          <PostList posts={filteredPosts} onSelect={setSelectedPost} />
        </aside>

        <main className="layout-main">
          <div className="card">
            <PostDetail post={selectedPost} />
          </div>

          <div className="card comments-section">
            <CommentList comments={currentComments} />
            <CommentForm onSubmit={handleAddComment} postId={selectedPost.id} />
          </div>
        </main>

        <aside className="layout-sidebar-right">
          <CategoryList />
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default App
