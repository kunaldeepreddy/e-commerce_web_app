import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants.js";

const homePageConfigApi = createApi({
  reducerPath: "homeConfig",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/product`,
  }),
  endpoints(builder) {
    return {
      homePageConfig: builder.query({
        // providesTags: (result, error, user) => {
        //   const tags = { type: "homePage" };
        // //   tags.push({ type: "homePageConfigApi" });
        //   return tags;
        // },
        query: () => {
          return {
            url: "/userConfig",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useHomePageConfigQuery } = homePageConfigApi;
export { homePageConfigApi };
