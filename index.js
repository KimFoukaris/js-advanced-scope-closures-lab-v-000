function produceDrivingRange(blockRange) {
  return function(start, stop) {
    diff = Math.abs(stop.slice(0,2) - start.slice(0,2)) - blockRange
    if (diff > 0) {
      return diff + ' blocks out of range'
    } else {
      return 'within range by ' + diff
    }
  }
}
