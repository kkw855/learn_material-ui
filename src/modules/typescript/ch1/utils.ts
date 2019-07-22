export interface IProduct {
  name: string;
  unitPrice: number;
}

function calculateTotalPrice(product: IProduct, quantity: number, discount: number): number {
  const priceWithoutDiscount = product.unitPrice * quantity
  const discountAmount = priceWithoutDiscount * discount
  return priceWithoutDiscount - discountAmount
}

export enum OrderStatus {
  Paid = 0,
  Shipped,
  Completed,
  Cancelled
}

export default calculateTotalPrice