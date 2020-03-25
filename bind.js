this.distance = 10000;

const roadTrip = {
  distance: 3000,

  getDistance: function(unit) {
    return this.distance + unit;
  }
};

const dist = roadTrip.getDistance.bind(roadTrip, 'km');

console.log(dist());
