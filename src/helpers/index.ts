export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('es_ES', {
        style: 'currency',
        currency: 'ars',
    }).format(quantity)
}