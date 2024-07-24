import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { nanoid } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker'

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          let tags = result.map( photo => {
            return { type: 'Photos', id: photo.id }
          });
          tags.push({ type: 'Albums', id: album.id})
          
          console.log(tags)
          return tags;
        },
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
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: 'Albums', id: album.id}]
        },
        query: (album) => {
          return {
            url: 'photos',
            method: 'POST',
            body: {
              id: nanoid(),
              name: faker.commerce.productAdjective(),
              albumID: album.id,
              url: faker.image.urlPicsumPhotos()
            }
          }
        }
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: 'Photos', id: photo.id}]
        },
        query: (photo) => {
          return {
            url: `photos/${photo.id}`,
            method: 'DELETE'
          }
        }
      })
    }
  }
});

export default photosApi;
export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;