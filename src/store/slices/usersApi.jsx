import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { nanoid } from '@reduxjs/toolkit'
import { faker } from '@faker-js/faker'

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => {
    return {
      fetchUsers: builder.query({
        providesTags: (result, error, user) => {
          return ['Users']
        },
        query: () => {
          return {
            url: 'users',
            method: 'GET',
          }
        }
      }),
      addUser: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return ['Users']
        },
        query: () => {
          return {
            url: 'users',
            method: 'POST',
            body: {
              id: nanoid(),
              name: faker.person.fullName(),
            }
          }
        }
      }),
      removeUser: builder.mutation({})
    }
  }
})

export default usersApi;
export const { useFetchUsersQuery, useAddUserMutation } = usersApi;