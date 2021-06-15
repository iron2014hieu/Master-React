# Thông tin API

URL: `https://api-ecom.duthanhduoc.com/`
Đối với các route cần xác thực => Gửi token lên bằng headers với key là `authorization`. Token phải bắt đầu bằng 'Bearer '

## Format trả về

Là một object

```ts
interface Response {
  message: string
  data?: any
}
```

Ví dụ

```json
{
  "message": "Lấy sản phẩm thành công",
  "data": {
    "_id": "60afb2c76ef5b902180aacba",
    "images": [
      "https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg"
    ],
    "price": 3190000,
    "rating": 4.6,
    "price_before_discount": 3990000,
    "quantity": 138,
    "sold": 1200,
    "view": 696,
    "name": "Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng",
    "description": "",
    "category": "60afafe76ef5b902180aacb5",
    "image": "https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg",
    "createdAt": "2021-05-27T14:55:03.113Z",
    "updatedAt": "2021-06-12T14:22:55.871Z"
  }
}
```

## Format lỗi

### Trong trường hợp lỗi 422 (thường do form) hoặc lỗi do truyền query / param bị sai

Ví dụ đăng ký email đã tồn tại

```json
{
  "message": "Lỗi",
  "data": {
    "email": "Email đã tồn tại"
  }
}
```

### Trong trường hợp lỗi còn lại

```json
{
  "message": "Lỗi do abcxyz"
}
```

## Register: `/register`

Method: POST
body

```json
{
  "email": "user2@gmail.com",
  "password": "123456"
}
```

Rules

- email: required, length: 5-160, isEmail
- password: required, length: 6-160

Response

```json
{
  "message": "Đăng ký thành công",
  "data": {
    "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxNUBnbWFpbC5jb20iLCJpZCI6IjYwYzZmNGViNGVhMWRlMzg5ZjM1NjA1YiIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjEtMDYtMTRUMDY6MTk6MjMuNzQ5WiIsImlhdCI6MTYyMzY1MTU2MywiZXhwIjoxNjI0MjU2MzYzfQ.WbNgnd4cewdDNpx-ZLebk1kLgogLctBqgh9fc9Mb3yg",
    "expires": "7d",
    "user": {
      "roles": ["User"],
      "_id": "60c6f4eb4ea1de389f35605b",
      "email": "user15@gmail.com",
      "createdAt": "2021-06-14T06:19:23.703Z",
      "updatedAt": "2021-06-14T06:19:23.703Z",
      "__v": 0
    }
  }
}
```

## Login: `/login`

Method: POST
body

```json
{
  "email": "user2@gmail.com",
  "password": "123456"
}
```

Rules

- email: required, length: 5-160, isEmail
- password: required, length: 6-160

Response

```json
{
  "message": "Đăng nhập thành công",
  "data": {
    "access_token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOThmNWI1MTY5MDU1MzZlODE4ZjhjYyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciIsIkFkbWluIl0sImNyZWF0ZWRfYXQiOiIyMDIxLTA2LTE0VDA4OjA4OjI4LjQ5NVoiLCJpYXQiOjE2MjM2NTgxMDgsImV4cCI6MTYyNDI2MjkwOH0.8YITBWt6SXikoaBHf-SlOh_h7ii0UgwY_5-bjCirY",
    "expires": "7d",
    "user": {
      "_id": "6098f5b516905536e818f8cc",
      "roles": ["User"],
      "email": "user2@gmail.com",
      "name": "Real user",
      "date_of_birth": null,
      "address": "",
      "phone": "",
      "createdAt": "2021-05-10T08:58:29.081Z",
      "updatedAt": "2021-05-10T08:58:29.081Z",
      "__v": 0
    }
  }
}
```

## Logout: `/logout`

Method: POST

## Read Products: `/products`

Ví du: `products?page=1&limit=30&order=createdAt&sortBy=asc`
Method: GET

Query Params:
page: number
limit: number
order: string,
sortBy: 'asc' || 'desc'

Response

```json
{
  "message": "Lấy các sản phẩm thành công",
  "data": {
    "products": [],
    "pagination": {
      "page": 1,
      "limit": 30,
      "page_size": 2
    }
  }
}
```

## Read me: `/me`

Method: GET

Response

```json
{
  "message": "Lấy người dùng thành công",
  "data": {
    "_id": "6098f5b516905536e818f8cc",
    "roles": ["User"],
    "email": "user@gmail.com",
    "name": "Real",
    "date_of_birth": null,
    "address": "",
    "phone": "",
    "createdAt": "2021-05-10T08:58:29.081Z",
    "updatedAt": "2021-05-10T08:58:29.081Z"
  }
}
```
