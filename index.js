function produceDrivingRange(blockRange) {
  return function(start, stop) {
    diff = Math.abs(stop.slice(0,2) - start.slice(0,2)) - blockRange
    if (diff > 0) {
      return Math.abs(diff) + ' blocks out of range'
    } else {
      return 'within range by ' + Math.abs(diff)
    }
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return tip = percent * fare;
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
