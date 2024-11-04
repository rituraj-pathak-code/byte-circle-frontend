const config = {
  BASE_URL: "http://localhost:3000",

  SIGN_UP: "/api/auth/signup",
  LOGIN: "/api/auth/login",
  LOGOUT: "/api/auth/logout",
  FETCH_USER: "/api/profile/view",
  FETCH_FEED: "/api/user/feed",
  CREATE_POST: "/api/post/create",
  FETCH_SUGGESTED_FRIENDS: "/api/user/suggestions",
  SEND_FRIEND_REQUEST: "/api/subscribe/send",
  FETCH_REQUESTS_RECEIVED: "/api/user/requests/received",
  ACCEPT_FRIEND_REQUEST: "/api/subscribe/accept",
  CANCEL_FRIENDSHIP: "/api/subscribe/cancel",
  FETCH_FRIENDS: "/api/user/subscribers",
  LIKE_POST: "/api/post/like"

};

export default config
