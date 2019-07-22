export interface IProduct {
  name: string;
  unitPrice: number;
}

function calculateTotalPrice(product: IProduct, quantity: number, discount: number): number {
  const priceWithoutDiscount = product.unitPrice * quantity
  const discountAmount = priceWithoutDiscount * discount
  return priceWithoutDiscount - discountAmount
}

export default calculateTotalPrice