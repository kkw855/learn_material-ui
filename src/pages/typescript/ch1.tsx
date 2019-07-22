import React, { ReactElement } from 'react'
import calc, { IProduct, OrderStatus } from '../../modules/typescript/ch1/utils'
import exponentiation, { logText } from '../../modules/typescript/ch1/future'
import { Typography } from '@material-ui/core'


function Page(): ReactElement {
  const product: IProduct = {
    name: 'Toy',
    unitPrice: 1200
  }
  const orderStatus = OrderStatus.Shipped

  const customer = {
    name: 'Lamps Ltd',
    turnover: 2000134,
    active: true
  }
  customer.turnover = 500000
  const numbers = [ 1, 3, 5 ]

  type GetTotal = (discount?: number) => number;

  abstract class Product {
    public readonly name: string;
    private _unitPrice: number;
    public abstract delete(): void

    protected constructor(name: string, unitPrice: number) {
      this.name = name
      this.unitPrice = unitPrice
    }

    public get unitPrice(): number {
      return this._unitPrice || 0
    }

    public set unitPrice(value: number) {
      if (value < 0) {
        value = 0
      }
      this._unitPrice = value
    }
  }

  class Table extends Product {
    private _deleted: boolean;
    private bestBefore: Date;
    delete(): void {
      this._deleted = true
    }

    constructor(bestBefore: Date, name: string, unitPrice: number) {
      super(name, unitPrice)
      this.bestBefore = bestBefore
    }

    get deleted(): boolean {
      return this._deleted
    }

    set deleted(value: boolean) {
      this._deleted = value
    }
  }

  interface IOrderDetail {
    product: Product;
    quantity: number;
    dateAdded?: Date;
    getTotal: GetTotal;
  }
  class OrderDetail implements IOrderDetail {
    public constructor(product: Product, quantity: number = 1) {
      this.product = product
      this.quantity = quantity
    }

    product: Product;
    quantity: number;
    dateAdded?: Date;
    getTotal(discount?: number): number {
      const priceWithoutDiscount = this.product.unitPrice * this.quantity
      const discountAmount = priceWithoutDiscount * discount
      return priceWithoutDiscount - discountAmount
    }
  }

  const table = new Table(new Date(2017, 4, 20), 'Table', 500)
  const order = new OrderDetail(table, 2)

  return (
    <React.Fragment>
      <Typography variant={'h5'}>
        타입스크립트 CH 1
      </Typography>
      <Typography component={'div'} variant={'body1'}>
        <div>
          function: {calc(product, 10, 0.2) + '원'}
        </div>
        <div>
          transpile to javascript: {exponentiation(3, 2)}
          {logText('logging')}
        </div>
        <div>
          Enum: {orderStatus}
        </div>
        <div>
          Object: {JSON.stringify(customer)}
        </div>
        <div>
          Array: Console.log{numbers.forEach(num => console.log(num))}
        </div>
        <div>
          Interface: 테이블 가격: {`${order.getTotal(0.1)}원`}
        </div>
        <div>
          {`Class: 테이블 가격: ${order.getTotal(0.1)}원, 테이블 개수: ${order.quantity}개`}
        </div>
      </Typography>
    </React.Fragment>
  )
}

export default Page