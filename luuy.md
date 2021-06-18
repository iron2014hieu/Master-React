# Lưu ý làm việc với Redux - Redux Toolkit

- Các data dùng chung ở nhiều component khác nhau, nhiều page khác nhau thì nên lưu ở redux
- Các data chỉ dùng ở 1 chỗ thì nên lưu ở component

- Khi get api thì nên thông qua `createAsyncThunk` để có được những action như `.../fulfilled` hoặc `.../rejected` để dễ dàng tracking sử dụng sau này cho các tính năng như loading
- Không cần thiết phải xử lý mọi action mà `createAsyncThunk` trả về, chỉ xử lý những cái cần dùng. Cũng như không cần thiết phải lưu hết mọi thứ vào redux
