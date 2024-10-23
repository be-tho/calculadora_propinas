import {OrderItem} from "../types";
import {useMemo} from "react";

type OrderTotalsProps = {
    order : OrderItem[]
}

export default function OrderTotals({order} : OrderTotalsProps) {
    const subtotalAmount = useMemo(() => order.reduce((total, item) =>
        total + item.price * item.quantity, 0), [order])

    return (
    <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl'>Totales y propina</h2>

            <div className='flex items-center space-x-3'>
                <p className='text-lg font-medium'>Sub-Total: ${subtotalAmount}</p>
                <p className='text-lg font-medium'>Propina: 10%</p>
            </div>
            <p className='text-lg font-medium'>Total a pagar: $132</p>

        </div>
        <button className=''>

        </button>
    </>
    )
 }