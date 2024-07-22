import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => {
    return {
      fetchUsers: builder.query({
        query: () => {
          return {
            url: 'users',
            method: 'GET',
          }
        }
      }),
      addUser: builder.mutation({}),
      removeUser: builder.mutation({})
    }
  }
})

export default usersApi;
export const { useFetchUsersQuery } = usersApi;