import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: 'photos',
            method: 'GET',
            params: {
              albumID: album.id
            }
          }
        }
      }),
      addPhoto: builder.mutation({}),
      removePhoto: builder.mutation({})
    }
  }
});

export default photosApi;
export const { useFetchPhotosQuery } = photosApi;