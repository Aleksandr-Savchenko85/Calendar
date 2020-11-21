export const getWeekStartDate = (date) => {
    const dateCopy = new Date(date);
   
    const dayOfWeek = dateCopy.getDay();
    const difference =
        dayOfWeek === 0 ?
        -6 // for Sunday
        :
        1 - dayOfWeek;
    

    const monday = new Date(dateCopy.setDate(date.getDate() + difference));

   

    return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());

}

export function addDays(date, days) { //function adding days in a week
    let result = new Date(date);
    result.setDate(result.getDate() + days)
    return result;
}


export const currentDate = () => { // function that returns the current date
    return new Date();
}








export const generateWeekRange = (startDate) => { // function generating weekly range
    const result = [];
    for (let i = 0; i < 7; i += 1) {
        const base = new Date(startDate);
       
        result.push(new Date(base.setDate(base.getDate() + i)));
       

    }
    return result;

}



export const getDateTime = (date, time) => {
    const [hours, minutes] = time.split(':');
    const withHours = new Date(new Date(date).setHours(Number(hours)));
    const withMinutes = new Date(
        new Date(withHours).setMinutes(Number(minutes)),
    );
    return withMinutes;
}

export const formatMins = (mins) => { // function format time for sidebar
    return mins < 10 ? `0${mins}` : mins;
}

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];