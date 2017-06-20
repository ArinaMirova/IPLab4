function getCurrentDate() {
    var date = new Date();

    return formateDate(date);
}

function formateDate(date) {
    var number = date.getDate().toString();

    var year = (date.getYear() + 1900).toString();

    var month;

    switch(date.getMonth()) {
        case 0:
            month = "січня";
            break;
        case 1:
            month = "лютого";
            break;
        case 2:
            month = "березня";
            break;
        case 3:
            month = "квітня";
            break;
        case 4:
            month = "травня";
            break;
        case 5:
            month = "червня";
            break;
        case 6:
            month = "липня";
            break;
        case 7:
            month = "серпня";
            break;
        case 8:
            month = "вересня";
            break;
        case 9:
            month = "жовтня";
            break;
        case 10:
            month = "листопада";
            break;
        case 11:
            month = "грудня";
            break;
    }
    
    var dayObj = getFormattedDay(date);

    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();

    return {
        date: number + ' ' + month + ' ' + year + ' року',
        day: dayObj.dayName,
        time: hours + ':' + minutes
    }
}

function getFormattedDay(date) {
    var day, dayNumber = date.getDay() == 0 ? 7 : date.getDay();

    switch(dayNumber) {
        case 1: 
            day = "Понеділок";
            break;
        case 2: 
            day = "Вівторок";
            break;
        case 3: 
            day = "Середа";
            break;
        case 4: 
            day = "Четвер";
            break;
        case 5: 
            day = "П'ятниця";
            break;
        case 6: 
            day = "Субота";
            break;
        case 7: 
            day = "Неділя";
            break;
    }
    
    return {
        dayNumber: dayNumber,
        dayName: day
    }
}

function getDateBefore(N) {
    var date = new Date();
    date.setDate(date.getDate() - N);
    
    return formateDate(date);
}

function getLastDay(year, month) {
    var date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(0);
    
    return getFormattedDay(date);
}

function getCurrentSeconds() {
    var currentDate = new Date();
    var morningDate = new Date();
    
    morningDate.setHours(0);
    morningDate.setMinutes(0);
    morningDate.setSeconds(0);
    morningDate.setMilliseconds(0);
    
    var morningTime = morningDate.getTime();
    var currentTime = currentDate.getTime();
    
    morningDate.setDate(morningDate.getDate() + 1);
    
    var tommorrowTime = morningDate.getTime();
    
    return {
        fromMorning: Math.floor((currentTime - morningTime) / 1000),
        beforeTommorrow: Math.floor((tommorrowTime - currentTime) / 1000)
    }
}

function getFormattedDate(date) {
  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth();
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

function minus(sDate, eDate) {
    var sTime = sDate.getTime();
    var eTime = eDate.getTime();
    
    var cTime = eTime - sTime;
    
    var milliseconds = cTime % 1000;
    var seconds = Math.floor( (cTime / 1000) % 60 );
    var minutes = Math.floor( (cTime / 1000 / 60) % 60 );
    var hours = Math.floor( (cTime / 1000 / 60 / 60) % 24 );
    var days = Math.floor( (cTime / 1000 / 60 / 60 / 24) % 365.25 );
    var years = Math.floor( cTime / 1000 / 60 / 60 / 24 / 365.25 );
    
    return {
        milliseconds: milliseconds,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days,
        years: years
    }
}

function formatDate(date) {
    var curDate = new Date();
    
    var s = minus(date, curDate);
    
    if(s.years > 0 || s.days > 0 || s.hours > 0) {
        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth();
        if (mm < 10) mm = '0' + mm;
        
        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;
        
        var h = date.getHours();
        if (h < 10) h = '0' + h;
        
        var m = date.getMinutes();
        if (m < 10) m = '0' + m;
        
        return dd + '.' + mm + '.' + yy + ' ' + h + ':' + m;
    }
    
    if(s.minutes > 0) {
        return s.minutes + ' хв. назад';
    }
    
    if(s.seconds > 0) {
        return s.seconds + ' сек. назад';
    }
    
    return 'тільки що';
}

function getDateFromString(string) {    
    var datArr = string.split(' ');
    var char;
    
    if(~datArr[0].indexOf('/')) {
        char = '/';    
    } else if(~datArr[0].indexOf('.')) {
        char = '.';
    } else if(~datArr[0].indexOf('-')) {
        char = '-';
    }
    
    var data = datArr[0].split(char);
    
    var date = new Date(data[2], data[1] - 1, data[0]);
    
    if(datArr.length > 1) {
        var time = datArr[1].split(':');
        
        date.setHours(time[0]);
        date.setMinutes(time[1]);
    }
    
    return date;
}

function getCurDateLang(lang) {
    var date = new Date();
    
    var options = {
      era: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    
    return date.toLocaleString(lang, options);
}