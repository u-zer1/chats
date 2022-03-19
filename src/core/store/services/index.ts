import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  tagTypes: ['Auth', 'Welcome'],
  endpoints: (builder) => ({
    signup: builder.mutation<any, any>({
      query: (user: any) => ({
        url: 'registration',
        method: 'post',
        body: user,
      }),
      invalidatesTags: () => ['Auth'],
    }),

    signin: builder.mutation<any, any>({
      query: (user) => ({
        url: 'login',
        method: 'post',
        body: user,
      }),
      invalidatesTags: () => ['Auth'],
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authApi;
