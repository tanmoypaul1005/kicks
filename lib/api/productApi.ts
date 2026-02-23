import { baseApi } from './baseApi';

export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category?: Category;
  images: string[];
}

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get products with pagination
    getProducts: builder.query<
      Product[],
      { limit?: number; offset?: number }
    >({
      query: ({ limit = 8, offset = 0 }) => 
        `/products?limit=${limit}&offset=${offset}`,
      providesTags: ['Products'],
    }),

    // Get product by ID
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),

    // Get all categories
    getCategories: builder.query<Category[], void>({
      query: () => '/categories',
      providesTags: ['Categories'],
    }),

    // Get products by category
    getProductsByCategory: builder.query<
      Product[],
      { categoryId: number; limit?: number; offset?: number }
    >({
      query: ({ categoryId, limit = 8, offset = 0 }) =>
        `/products?categoryId=${categoryId}&limit=${limit}&offset=${offset}`,
      providesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} = productApi;
