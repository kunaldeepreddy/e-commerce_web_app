import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants.js"
// // DEV ONLY!!!
// const pause = (duration) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, duration);
//   });
// };
// console.log(BASE_URL);
const userLoginApi = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/user`
  }),
  endpoints(builder) {
    return {
      userLogin: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "Login", email: user.email, password: user.password }];
        },
        query: (user) => {
          return {
            url: "/login",
            method: "POST",
            body: {
              email: user.email,
              password: user.password,
            },
          };
        },
      }),
    };
  },
});

export const {
  useUserLoginMutation,
} = userLoginApi;
export { userLoginApi };
