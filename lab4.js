var loadDate;

window.onload = function() {
    loadDate = new Date();
};

function getValue(id) {
    var el = document.getElementById(id);
    return el.value;
}

function currentDate(id) {
    var element = document.getElementById(id);
    
    var date = getCurrentDate();
    
    element.innerHTML = '<div>Дата: ' + date.date + '</div><div>День: ' + date.day + '</div><div>Час: ' + date.time + '</div>';
}

function day(id) {
    var element = document.getElementById(id);

    var date = getFormattedDay(new Date("4.9.2017"));

    element.innerHTML = '<div>Номер дня: ' + date.dayNumber + '</div><div>Назва дня: ' + date.dayName + '</div>';
}

function dateBefore(numberId, resultId) {
    var resultEl = document.getElementById(resultId);
    
    var number = getValue(numberId);
    
    var date = getDateBefore(number);
    
    resultEl.innerHTML = '<div>Дата: ' + date.date + '</div><div>День: ' + date.day + '</div><div>Час: ' + date.time + '</div>';
}

function lastDay(yearId, monthId, resultId) {
    var resultEl = document.getElementById(resultId);
    
    var year = getValue(yearId);
    var month = getValue(monthId);
    
    var result = getLastDay(year, month);
    
    resultEl.innerHTML = '<div>Номер дня: ' + result.dayNumber + '</div><div>Назва дня: ' + result.dayName + '</div>';
}

function seconds(resultId) {
    var resultEl = document.getElementById(resultId);
    
    var result = getCurrentSeconds();
    
    resultEl.innerHTML = '<div>Пройшло: ' + result.fromMorning + ' секунд</div><div>Лишилось: ' + result.beforeTommorrow + ' секунд</div>';
}

function formattedDate (yearId, monthId, dateId, resultId) {
    var resultEl = document.getElementById(resultId);
    
    var result = getFormattedDate(new Date(getValue(yearId), getValue(monthId), getValue(dateId)));
    
    resultEl.innerHTML = result;    
}

function subs(sYearId, sMonthId, sDateId, eYearId, eMonthId, eDateId, resultId) {
    var resultEl = document.getElementById(resultId);
    var sDate = new Date(getValue(sYearId), getValue(sMonthId), getValue(sDateId));
    var eDate = new Date(getValue(eYearId), getValue(eMonthId), getValue(eDateId));
    
    var result = minus(sDate, eDate);    
    
    resultEl.innerHTML = 'Пройшло ' + result.years + ' років, ' + result.days + ' днів, ' + result.hours + ' годин, ' + result.minutes + ' хвилин, ' + result.seconds + ' секунд, ' + result.milliseconds + ' мілісекунд';
}

function formDat(resultId) {
    var resultEl = document.getElementById(resultId);
    
    var result = formatDate(loadDate);
    
    resultEl.innerHTML = result;
}

function dateFromFormat(dateStringId, resultId) {    
    var data = getValue(dateStringId);
    var resultEl = document.getElementById(resultId);
    
    var date = getDateFromString(data);
    
    var result = formateDate(date);
    
    resultEl.innerHTML = '<div>Дата: ' + result.date + '</div><div>День: ' + result.day + '</div><div>Час: ' + result.time + '</div>';
}

function dateFromLang(langId, resultId) {
    var resultEl = document.getElementById(resultId);
    var lang = getValue(langId);
    
    var result = getCurDateLang(lang);
    
    resultEl.innerHTML = result; 
}