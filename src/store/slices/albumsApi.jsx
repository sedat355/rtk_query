import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { nanoid } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker'

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => {
    return {
      fetchAlbums: builder.query({
        providesTags: ['Albums'],
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
      addAlbum: builder.mutation({
        invalidatesTags: ['Albums'],
        query: (user) => {
          return {
            url: 'albums',
            method: 'POST',
            body: {
              id: nanoid(),
              name: faker.commerce.productName(),
              userID: user.id
            }
          }
        }
      }),
      removeAlbum: builder.mutation({
        invalidatesTags: ['Albums'],
        query: (album) => {
          return {
            url: `albums/${album.id}`,
            method: 'DELETE'
          }
        }
      })
    }
  }
});

export default albumsApi;
export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
