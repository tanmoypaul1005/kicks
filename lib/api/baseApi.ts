import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1',
  }),
  endpoints: () => ({}),
  tagTypes: ['Products', 'Categories', 'Product'],
});
