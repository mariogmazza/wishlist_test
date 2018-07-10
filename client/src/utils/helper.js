// Number.prototype.formatMoney = function(c, d, t){
//   var n = this, 
//       c = isNaN(c = Math.abs(c)) ? 2 : c, 
//       d = d == undefined ? "." : d, 
//       t = t == undefined ? "," : t, 
//       s = n < 0 ? "-" : "", 
//       i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
//       j = (j = i.length) > 3 ? j % 3 : 0;
//      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
//    };


   Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this, 
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
  };


  export const formatCurrency = (toConvert) => {
    var convertedNumver = toConvert.formatMoney(2);
    return convertedNumver
  }