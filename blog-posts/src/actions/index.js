import jsonPlaceholder from "../apis/jsonPlaceholder";
// importing LODASH for the alternate solution found on line 23
// and the solution of creating a super combined action on line 6
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // you HAVE to call dispatch when using another action creator inside this
    // action creator.
    await dispatch(fetchPosts());
    // getState is a function that returns the current state of the store
    // thanks too redux-thunk for this
    // lodash uniq is a function that returns a new array
    // with all the unique values
    // and lodash map function is a function that takes in an array
    // and returns all the values of the key provided
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    // we don't need the await keyword here because we already have the list of
    // posts and we don't need to wait for the API call to finish to do
    // more stuff in this action creator
    userIds.forEach((id) => dispatch(fetchUser(id)));

    // ALTERNATE WAY TO call the users using lodash chain
    //      _.chain(getState().posts)
    //           .map("userId")
    //            .uniq()
    //            .forEach((id) => dispatch(fetchUser(id)))
    //            .value();
};

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({
        type: "FETCH_POSTS",
        payload: response.data,
    });
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: "FETCH_USER",
        payload: response.data,
    });
};

// alternate solution to overfetching data using LODASH library
// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// }
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({
//         type: "FETCH_USER",
//         payload: response.data,
//     });
// });
