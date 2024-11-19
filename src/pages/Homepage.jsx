import { initialState, postReducer } from "../reducers/PostReducer";
import { useEffect, useReducer } from "react";
import useAxios from "../hooks/useAxios";
import PostList from "../components/post/PostList";
import { actions } from "../actions";

const Homepage = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });

    const fetchingPosts = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
      }
    };
    fetchingPosts();
  }, []);

  if (state?.loading) return <div>We are working...</div>;
  if (state?.error)
    return <div>Error in fetching posts: {state?.error?.message}</div>;

  return (
    <div className="">
      <PostList posts={state?.posts} />
    </div>
  );
};

export default Homepage;
