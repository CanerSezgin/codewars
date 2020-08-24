/*** Best Solution ***/
// O(1)
export const humanReadable = seconds => [
    Math.floor( seconds / 3600 ),
    Math.floor( seconds / 60 ) % 60,
    seconds % 60
  ].map(val => (val < 10 ? "0" + val : val)).join(':')


/*** More Explanatory Solution ***/
// O(1)
export function humanReadable2(seconds) {
  // Not necessary but it is a best practice for static value
  const timeMapper = {
    sec: 1,
    min: 60,
    hr: 3600
  }
  
  // This object will be updated with calculation
  const time =  {
    HH: 0,
    MM: 0,
    SS: 0
  }

  // Convert 2 Digit Format
  const format = number => {
    if(number < 10){
      return "0" + number
    } else {
      return number
    }
  }
  
  let remaining = seconds
  // Calculate Hours
  time.HH = format(Math.floor(remaining / timeMapper.hr))
  remaining = remaining % timeMapper.hr
  
  // Calculate Minutes
  time.MM = format(Math.floor(remaining / timeMapper.min))
  remaining = remaining % timeMapper.min
  
  // Calculate Seconds
  time.SS = format(remaining)
  
  return Object.keys(time).map(el => time[el]).join(':')
}