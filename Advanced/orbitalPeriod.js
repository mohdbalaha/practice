
function orbitalPeriod(arr) {
    var newArr=[];
    function op(alt){
        var GM = 398600.4418;
        var earthRadius = 6367.4447;
        return Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+alt,3)/GM));
      }
    return arr.map(function(obj){
      obj.orbitalPeriod=op(obj.avgAlt);
      delete obj.avgAlt;
      return obj;
    });
  }

  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]