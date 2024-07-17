export class StringService {

    static formatNumber(num) {
        return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }

    static formatSalary(from, to, currency) {
        if (!from && !to) return 'Доход не указан'
        const currencyRender = currency === 'USD' ? '$' : '₽'
        const fromRender = StringService.formatNumber(from)
        const toRender = StringService.formatNumber(to)
        if(from && to) return `${fromRender} - ${toRender} ${currencyRender}`
        return `${from ? 'от ' + fromRender : ''} ${to ? 'до ' + toRender : ''} ${currencyRender}`
    }
}