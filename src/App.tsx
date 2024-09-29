import {menuItems} from "./data/db.ts";
import MenuItem from "./components/MenuItem.tsx";
function App() {

  return (
    <>
        <header className="bg-teal-400 py-5">
            <h1 className="text-4xl text-center text-4xl font-medium">Calculadora de Propinas</h1>
        </header>
        <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
            <div className="p-5">
                <h2 className="text-4xl font-black pb-2">Menu</h2>
                <div className="space-y-3">
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
            <div>
                <h2>Consumo</h2>
            </div>
        </main>
    </>
  )
}

export default App
