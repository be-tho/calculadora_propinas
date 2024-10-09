import { useState } from 'react';
import { OrderItem, MenuItem } from '../types';

export default function UseOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = (item : MenuItem) => {

        const itemExists = order.find(orderItem => orderItem.id === item.id)
        if(itemExists){
            const updatedOrder = order.map(orderItem => {
                if(orderItem.id === item.id){
                    return {...orderItem, quantity: orderItem.quantity + 1}
                }
                return orderItem
            })
            setOrder(updatedOrder)
            return
        }else {
            const newItem : OrderItem= {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    return {
        addItem,
        order
    }
 }