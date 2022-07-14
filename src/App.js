import React, { useState } from "react";

import { Post } from "./components/Post";
import Title from "./components/Title";
import { Header } from "./components/Header";
import { ThemeProvider } from "./contexts/theme";

export function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title#01",
      subtitle: "Sub#01",
      likes: 20,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Title#02",
      subtitle: "Sub#02",
      likes: 10,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Title#03",
      subtitle: "Sub#03",
      likes: 50,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Title#04",
      subtitle: "Sub#04",
      likes: 100,
      removed: false,
    },
  ]);

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  }

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 100,
        removed: false
      },
    ]);
  }

  return (
    <ThemeProvider>
      <Header title="Blog do JStack">
        <Title as="h2" color="red">
          Posts da semana
        </Title>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemovePost} post={post} />
      ))}
    </ThemeProvider>
  );
}
