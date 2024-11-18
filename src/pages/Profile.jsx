import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions";
import ProfileInfo from "../profile/ProfileInfo";
import MyPost from "../profile/MyPost";

const Profile = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, []);

  if (state?.loading) return <h2>Loading posts...</h2>;
  return (
    <div>
      Welcome, {state?.user?.firstName} {state?.user?.lastName}
      <p>
        You have {state?.posts.length > 0 ? state?.posts.length : "no"} post
        {state?.posts.length > 1 ? "s" : ""}
      </p>
      <ProfileInfo />
      <MyPost />
    </div>
  );
};

export default Profile;
