/**
 * Try the challenge with the Object.groupBy method
 *
 * @param {array} workingHours An array of working hours in the format provided at the end of file.
 *
 * @returns object with the comment format inside the function.
 */
function workingHoursProxy(workingHours) {
  // TODO: Implement here
  //
  //
  // return {
  //   "Saturday": ["9:00-14:00", "16:00-22:00"],
  //   "Sunday": ["9:00-16:00"],
  //   "Friday": ["9:00-22:00"]
  // }
}

const workingHours = [
    {
      day_of_week: "Saturday",
      start_time: "9:00",
      end_time: "14:00",
    },
    {
      day_of_week: "Friday",
      start_time: "9:00",
      end_time: "16:00",
    },
    {
      day_of_week: "Saturday",
      start_time: "16:00",
      end_time: "22:00",
    },
    {
      day_of_week: "Sunday",
      start_time: "9:00",
      end_time: "22:00",
    },
   ];

//implement with forEach
const workingHoursProxy1 = (workingHours) => {
    const result = {}
    workingHours.forEach(({day_of_week,start_time,end_time})=>{
        const timeRange = `${start_time}-${end_time}`;
        if(!result[day_of_week]){
            result[day_of_week]=[]
        }
        result[day_of_week].push(timeRange);
    })
    return result
}


//implement with reduce
const workingHoursProxy2 = () => {
    return workingHours.reduce((acc,{day_of_week,start_time,end_time})=>{
        const timeRange = `${start_time}-${end_time}`;
        if (!acc[day_of_week]){
            acc[day_of_week]=[]
        }
        acc[day_of_week].push(timeRange);
        return acc;
    },{});
}

//implement with groupBy - only work with browser not node
const workingHoursProxy3 = (workingHours) => {
    const groupResult = Object.groupBy(workingHours,({day_of_week})=>day_of_week);
    return  Object.fromEntries(
        Object.entries(groupResult).map(([day, entries]) => [
            day,
            entries.map(entry => `${entry.start_time}-${entry.end_time}`)
        ])
    );
}

console.log(workingHoursProxy1(workingHours));
console.log(workingHoursProxy2(workingHours));
// console.log(workingHoursProxy3(workingHours));


//ask about spread operators
