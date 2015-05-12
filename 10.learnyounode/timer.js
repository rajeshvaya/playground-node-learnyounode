module.exports = function(){
    d = new Date();
    year = d.getFullYear();
    month = d.getMonth()+1 > 9 ? d.getMonth()+1 : "0"+(d.getMonth()+1);
    date = d.getDate() > 9 ? d.getDate() : "0"+d.getDate();
    hours = d.getHours() > 9 ? d.getHours() : "0"+d.getHours();
    minutes= d.getMinutes() > 9 ? d.getMinutes() : "0"+d.getMinutes();
    
    return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes;
}
