export function getWeekDays(): string[] {
    const currentDate = new Date();

    return Array.from({ length: 7 }, (_, index) => {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + index);

        const dayAbbreviation = new Intl.DateTimeFormat('es', { weekday: 'short' }).format(nextDate);
        const dayOfMonth = nextDate.getDate();

        return `${dayAbbreviation.charAt(0).toUpperCase()}${dayAbbreviation.slice(1)} ${dayOfMonth}`;
    });
}