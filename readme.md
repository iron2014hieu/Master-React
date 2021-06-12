# React

## Tổng quan về React

1. ReactJS là gì, tại sao phải học ReactJS
2. Cài đặt ReactJS: CRA, Webpack, URL

## Setup môi trường

1. Cài Nodejs và VS Code: Cài extension cần thiết
2. Cài đặt Git
3. Tạo Repo trên github
4. Tạo SSH key và clone repo
5. Sử dụng CRA để tạo project React
6. Sơ lượt về cấu trúc folder của ReactJs
7. Setup Prettier và ESLint
8. CICD và Deploy với Vercel và Netlify

## 3. React căn bản

1. DOM và Virtual DOM là gì
2. JSX trong ReactJS
3. ReactDOM.render
4. Class component và functional compnent
5. Life cycle trong React Class
6. State và setState
7. Prop và PropTypes
8. Các cách render trong react
9. constructor
10. componentDidMount
11. componentWillUnmount
12. componentDidUpdate
13. Sơ lượt về React Hooks
14. useState
15. useEffect
16. Lỗi mutate state, props
17. Các yếu tố ảnh hưởng đến việc render của component
18. Higher Order Component
19. React.memo
20. useMemo
21. useCallback
22. ref, createRef, useRef, forwardRef
23. custom hook, thử tạo useInputNumber và usePrevious
24. useContext
25. useReducer
26. Sử dụng React Devtool để debug

## Vấn đề CSS của React

1. Vấn đề global CSS
2. CSS, SCSS
3. Atomic CSS
4. CSS module
5. CSS in JS (CSS inline, Styled Component)

## Project Student Management

1. Tạo nhanh UI bằng bootstrap
2. Thêm logic state
3. Chia component Input và Student
4. Thêm chức năng cập nhật và xóa student

## Project Validate Form với React Hook Form

1. Tạo UI trang Register
2. Áp dụng React hook form để validate

## React Router căn bản

1. Tạo Route cho các page
2. Link và NavLink
3. Switch và exact
4. Redirect
5. Nested Route
6. Not Found
7. React Router hooks
8. Xử lý query params với custom hook useQuery

## Redux và Redux toolkit

1. Tại sao dùng Redux và cách Redux hoạt động
2. Cấu hình file reducer, store và Redux Dev Tools
3. Cấu hình types và actions. Dùng HOC connect
4. Dùng hook useSelector và useDispatch
5. Middleware với redux-thunk
6. Dùng immer để mutate state
7. Giới thiệu về Redux Toolkit
8. Configure store và root Reducer
9. Sử dụng createReducer và createAction
10. Sử dụng createSlice và createAsyncThunk

## Clone Shopee trang đăng ký

1. Khởi tạo Project, Setup Prettier, ESLint, jsconfig.json
2. Cài một số package cần thiết. Setup CSS global và fonts

- Material để dùng 1 vài component nhỏ: `@material-ui/core, @material-ui/lab`
- Redux để quản lý state: `@reduxjs/toolkit, react-redux`
- React Router Dom cho Router: `react-router-dom`
- Axios để fetch API: `axios`
- classnames hỗ trợ set class cho component: `classnames`
- date-fns để quản lý ngày giờ: `date-fns`
- dompurify để render HTML an toàn, hạn chế tấn công XSS: `dompurify`
- lodash để dùng 1 số function hay: `lodash`
- node-sass để dùng scss cho CRA: `node-sass`.
  Lưu ý nếu bị báo lỗi dạng `Node Sass version 6.0.0 is incompatible with ^4.0.0 || ^5.0.0.` nghĩa là do Node Sass bản mới không tương thích, phải hạ bản node sass xuống.
  Ví dụ ở đây hạ xuống 5.0.0.

  ```bash
  yarn remove node-sass
  yarn add node-sass@5.0.0
  ```

- normalize.css để phục vụ reset CSS: `normalize.css`
- prop-types để checktype prop: `prop-types`
- query-string để xử lý query params trên URL: `query-string`
- react-hook-form để xử lý Form: `react-hook-form`
- react-toastify để hiển thị thông báo dạng toast: `react-toastify`
- styled-components để CSS cho react: `styled-components`

```bash
yarn add @material-ui/core @material-ui/lab @reduxjs/toolkit react-redux react-router-dom axios classnames date-fns dompurify lodash node-sass normalize.css prop-types query-string react-hook-form react-toastify styled-components
```

3. Setup Redux và Router

## Clone shopee trang đăng nhập

## Clone Shopee trang danh sách sản phẩm

## Clone Shopee trang chi tiết sản phẩm

## Clone Shopee trang giỏ hàng

## Clone Shopee trang thông tin user
