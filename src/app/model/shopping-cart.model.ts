export interface ShoppingCartResponseDto{
  productsInCart: ProductShoppignCartResponseDto[];
}

export interface ProductShoppignCartResponseDto{
  id: number;
  name: string;
}
