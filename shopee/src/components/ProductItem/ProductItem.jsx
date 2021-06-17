import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './productItem.style'

export default function ProductItem() {
  return (
    <S.Product>
      <Link to="">
        <S.ProductItem>
          <S.ProductItemImage>
            <img
              src="https://cf.shopee.vn/file/3e07638a8d13e0f877fd94df3fb2f849_tn"
              alt=""
            />
          </S.ProductItemImage>
          <S.ProductItemInfo>
            <S.ProductItemTitle>
              Bong bóng màu bánh macaron xinh xắn dùng để trang trí tiệc
            </S.ProductItemTitle>
            <S.ProductItemPrice>
              <S.ProductItemPriceOriginal>đ 8.700</S.ProductItemPriceOriginal>
              <S.ProductItemPriceSale>đ 8.700</S.ProductItemPriceSale>
            </S.ProductItemPrice>
            <S.ProductItemMeta>
              <ProductRating />
              <S.ProductItemSold>
                <span>1.7k</span>
                <span>Đã bán</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
          </S.ProductItemInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  )
}
