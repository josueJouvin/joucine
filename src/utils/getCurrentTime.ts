export function getCurrentTime(): { plusTwoHours: string | null; plusOneAndHalfHours: string | null } {
    const currentDate = new Date();

    const calculateFormattedTime = (hours: number): string => {
        const futureDate = new Date(currentDate.getTime() + hours * 60 * 60 * 1000);
        const roundedMinutes = Math.round(futureDate.getMinutes() / 15) * 15;
        futureDate.setMinutes(roundedMinutes);
        return `${futureDate.getHours()}:${String(futureDate.getMinutes()).padStart(2, '0')}`;
    };

    return {
        plusTwoHours: calculateFormattedTime(2),
        plusOneAndHalfHours: calculateFormattedTime(1.5),
    };
}