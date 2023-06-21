import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { hostUrl, UrlParts } from "../const/urlConsts";

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: fetchBaseQuery({ baseUrl: hostUrl + UrlParts.API }),
  endpoints: (builder) => ({
    getElements: builder.query({
      query: (args) => ({
        url: args.url,
        params: { ...args.queryParams }
      })
    }),
    getElement: builder.query({
      query: url => (url)
    })
  })
});

// export const enhaucedApi = api.enhanceEndpoints({});
