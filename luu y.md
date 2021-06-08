# Lưu ý khi dùng createAsyncThunk & createSlice

## createAsyncThunk

- Nếu lỗi trả về không đúng định dạng SerializedError hoặc string thì sẽ bị xóa khỏi error.
  Vì thế trong trường hợp này thì sử dụng thunkAPI.rejectWithValue.

```ts
export interface SerializedError {
  name?: string
  message?: string
  stack?: string
  code?: string
}
```

- Nếu gặp warning trên trình duyệt về serialized error thì custom lại middleware

```js
middleware: [...getDefaultMiddleware({ serializableCheck: false })]
```

- Nếu bị pause do exception thì tắt bên tab Sources

## createSlice

### 1. reducers: Là 1 object.

- Dùng khi muốn generate action từ slice

### 2. extraReducers: Là 1 object hoặc builder callback.

- Dùng khi cần sử dụng builder callback
- Dùng khi không muốn generate action (đã có action trước đó)
- Dùng khi sử dụng createAsyncThunk
