import {MenuItem, OrderItem} from "../types";

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id:MenuItem['id']) => void
}
export default function OrderContents({order, removeItem}: OrderContentsProps) {
    return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-5">
            {order.length === 0 ? <p className="text-center">No hay productos en la orden</p> :
                ( order.map(item =>
                    (
                        <div key={item.id} className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b">
                            <div>
                                <p className="text-lg font-medium">{item.name}</p>
                                <p className="text-sm">Cantidad: {item.quantity}</p>
                                <p className="text-sm">Precio: ${item.price * item.quantity}</p>
                            </div>
                            <button
                                onClick={()=> removeItem(item.id)}
                                className="bg-red-600 size-8 cursor-pointer rounded-full text-white font-black">
                                X
                            </button>
                        </div>

                    ))
                )
            }
        </div>
    </div>
    )
}