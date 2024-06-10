import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    status: 'idle',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'idle';
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'error';
            });
    },
});

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        return res.json();
    }
);
