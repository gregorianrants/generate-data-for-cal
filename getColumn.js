const getRndInteger = require('./getRndInteger')
const getIntervalFactory = require('./getInterval')

function gap(){
    return getRndInteger(0,2)
}
const getInterval = getIntervalFactory({gap})

function getLastItem(array) {
    return array[array.length - 1]
}

const intervals = [getInterval.first()]

function getColumn(intervals){
    const previousInterval = getLastItem(intervals)
    const next = getInterval.next(previousInterval)
    if(!next) return intervals
    return getColumn([...intervals,next])
}

console.log(getColumn(intervals))