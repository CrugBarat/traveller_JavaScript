const Traveller = function(journeys) {
  this.journeys = journeys;
}

Traveller.prototype.getJourneyStartLocations = function() {
  const locations = [];
  this.journeys.forEach(journey => locations.push(journey.startLocation));
  return locations;
}

Traveller.prototype.getJourneyEndLocations = function () {
  const locations = [];
  this.journeys.forEach(journey => locations.push(journey.endLocation));
  return locations;
}

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
}

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance);
}

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
}

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transport = this.journeys.map(journey => journey.transport);
  return uniqueTransport = [...new Set(transport)];
}

module.exports = Traveller;
