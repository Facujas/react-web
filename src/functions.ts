export function applyColorOpacity(hexColor:string, opacity:number) {
    var r = parseInt(hexColor.substring(1, 3), 16);
    var g = parseInt(hexColor.substring(3, 5), 16);
    var b = parseInt(hexColor.substring(5, 7), 16); 
  
    var color = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
  
    return color;
} 

export function getFlagEmoji(countryCode:string) {
    if(!countryCode) return '🍍'; 
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map((char:any) =>  127397 + char.charCodeAt());

    return String.fromCodePoint(...codePoints);
}

export function diffForHumans(date:string) {
    let formatted = new Date(date)
    const diffInMilliseconds = Date.now() - formatted.getTime();

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    if (diffInMilliseconds < minute) {
        const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
        return diffInSeconds + ' segundos';
    } else if (diffInMilliseconds < hour) {
        const diffInMinutes = Math.floor(diffInMilliseconds / minute);
        return diffInMinutes + ' minutos';
    } else if (diffInMilliseconds < day) {
        const diffInHours = Math.floor(diffInMilliseconds / hour);
        return diffInHours + ' horas';
    } else if (diffInMilliseconds < week) {
        const diffInDays = Math.floor(diffInMilliseconds / day);
        return diffInDays + ' días';
    } else if (diffInMilliseconds < month) {
        const diffInWeeks = Math.floor(diffInMilliseconds / week);
        return diffInWeeks + ' semanas';
    } else if (diffInMilliseconds < year) {
        const diffInMonths = Math.floor(diffInMilliseconds / month);
        return diffInMonths + ' meses';
    } else {
        const diffInYears = Math.floor(diffInMilliseconds / year);
        return diffInYears + ' años';
    }
}