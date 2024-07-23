import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: 'albums',
            method: 'GET',
            params: {
              userID: user.id 
            }
          }
        }
      }),
      addAlbum: builder.mutation({}),
      removeAlbum: builder.mutation({})
    }
  }
});

export default albumsApi;
export const { useFetchAlbumsQuery } = albumsApi;
