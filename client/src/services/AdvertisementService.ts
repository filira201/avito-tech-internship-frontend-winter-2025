import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypeAdvertisement } from "../models/types";

export const advertisementApi = createApi({
  reducerPath: "advertisementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${import.meta.env.VITE_BASE_URL_PORT || 3000}`,
  }),
  tagTypes: ["Advertisements"],
  endpoints: (builder) => ({
    getAllAdvertisements: builder.query<TypeAdvertisement[], void>({
      query: () => ({
        url: "/items",
      }),
      providesTags: ["Advertisements"],
    }),
    getAdvertisementById: builder.query<TypeAdvertisement, number>({
      query: (id) => ({
        url: `/items/${id}`,
      }),
      providesTags: ["Advertisements"],
    }),
    createAdvertisement: builder.mutation<TypeAdvertisement, TypeAdvertisement>(
      {
        query: (advertisement) => ({
          url: "/items",
          method: "POST",
          body: advertisement,
        }),
        invalidatesTags: ["Advertisements"],
      }
    ),
    updateAdvertisement: builder.mutation<TypeAdvertisement, TypeAdvertisement>(
      {
        query: (advertisement) => ({
          url: `/items/${advertisement.id}`,
          method: "PUT",
          body: advertisement,
        }),
        invalidatesTags: ["Advertisements"],
      }
    ),
  }),
});
