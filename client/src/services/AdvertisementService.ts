import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Advertisement } from "../models/types";

export const advertisementApi = createApi({
  reducerPath: "advertisementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${import.meta.env.VITE_BASE_URL_PORT}`,
  }),
  tagTypes: ["Advertisements"],
  endpoints: (builder) => ({
    getAllAdvertisements: builder.query<Advertisement[], void>({
      query: () => ({
        url: "/items",
      }),
      providesTags: ["Advertisements"],
    }),
    getAdvertisementById: builder.query<Advertisement, number>({
      query: (id) => ({
        url: `/items/${id}`,
      }),
      providesTags: ["Advertisements"],
    }),
  }),
});
