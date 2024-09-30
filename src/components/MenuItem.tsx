import type { MenuItem } from '../types';
type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void

}
export default function MenuItem({item, addItem} : MenuItemProps) {
    return (
    <button className="border-2 border-gray-300 p-4 w-full flex justify-between hover:bg-teal-200 hover:border-teal-400"
        onClick={()=> addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
    )
 }