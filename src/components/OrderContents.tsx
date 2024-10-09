import {OrderItem} from "../types";

type OrderContentsProps = {
    order: OrderItem[];
}
export default function OrderContents({order}: OrderContentsProps) {
    return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-5">
            {order.length === 0 ? <p className="text-center">No hay productos en la orden</p> :
                ( order.map(item =>
                    (
                    <div key={item.id}>
                        <p className="text-lg font-medium">{item.name}</p>
                        <p className="text-sm">Cantidad: {item.quantity}</p>
                        <p className="text-sm">Precio: {item.price}</p>
                    </div>
                    ))
                )
            }
        </div>
    </div>
    )
}