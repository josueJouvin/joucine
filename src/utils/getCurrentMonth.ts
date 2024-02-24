export function getCurrentMonth(): string {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('es', { month: 'long' });

    return currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);
}