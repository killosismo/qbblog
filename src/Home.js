import PostList from "./PostList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: posts,
  } = useFetch("https://qbblog.herokuapp.com/posts");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {posts && <PostList posts={posts} />}
    </div>
  );
};

export default Home;
