





const isMorning =time=>{
    return time >= 4 && time < 12

} 
const isAfternoon =time=>{
   return time >= 12  && time < 17

}
const isEvening =time=>{
    return time >= 17 || time < 4
}
const getTimeOfDay=time=>{
    timeofday=isMorning(time) ? "Morning" : timeofday=isAfternoon(time) ? "Afternoon": "Evening"
    return timeofday;
}

module.exports={isMorning,isAfternoon,isEvening,getTimeOfDay}