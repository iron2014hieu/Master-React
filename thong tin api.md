# Thông tin API

URL: `https://api-ecom.duthanhduoc.com`

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

Ví dụ nhập email không đúng định dạng

```json
{
  "email": "Email không đúng định dạng"
}
```

### Trong trường hợp lỗi còn lại

```json
{
  "message": "Lỗi do abcxyz"
}
```

## Register: `/register`

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
