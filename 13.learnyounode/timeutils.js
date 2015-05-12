// requires

// lets go
module.exports = function(){
    return {
        getTime: function(iso){
            iso = iso || new Date().toISOString();
            d = new Date(iso);
            return {
                hour: d.getHours(),
                minute: d.getMinutes(),
                second: d.getSeconds(),
            };
        },

        getUnixTime: function(iso){
            iso = iso || new Date().toISOString();
            d = new Date(iso);
            return {unixtime: d.getTime()};
        },
    }
}
