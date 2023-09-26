import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants.js"

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
      userSignUp: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "Register", name: user.name, email: user.email, mobile_number: user.mobile_number, password: user.password }];
        },
        query: (user) => {
          return {
            url: "/registerUser",
            method: "POST",
            body: {
              name: user.name,
              email: user.email,
              mobile_number: user.mobile_number,
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
  useUserSignUpMutation
} = userLoginApi;
export { userLoginApi };
