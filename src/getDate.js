function dateConverter(time){
    if(time){
        var date = new Date(time);
        var currentDate = new Date();

       if(date < currentDate){
           return false;
       }

        var day = date.getDate()+'';
        day = day.length == 2 ? day : '0'+day;
        var month = date.getMonth() + 1+'';
        month = month.length == 2 ? month : '0'+month;
        var year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
    return null
}

function timeConverter(time){
    if(time){
        var date = new Date(time);
        var hours = date.getHours() +'';
        hours = hours.length == 2 ? hours : '0'+hours;
        var minutes = date.getMinutes() +'';
        minutes = minutes.length == 2 ? minutes : '0'+minutes;
        return `${hours}:${minutes}`;
    }
    return null;
}

export function getDate(start_time, end_time){
    console.log(start_time, new Date().getTime());
    const startTime = dateConverter(start_time);
    if(!startTime){
        return null
    }
    const endTime = dateConverter(end_time);

    if(startTime === null && endTime === null){
        return '';
    }else if(startTime === null){
        return `${endTime} ${timeConverter(end_time)}`;
    }else if(endTime === null){
        return `${startTime} ${timeConverter(start_time)}`;
    }else{
        return startTime == endTime ? startTime+`, ${timeConverter(start_time)} - ${timeConverter(end_time)}` : `${startTime} ${timeConverter(start_time)} - ${endTime} ${timeConverter(end_time)}`
    }
}