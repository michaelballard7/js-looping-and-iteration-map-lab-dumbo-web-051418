// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return drivers.map((driver)=>{
    return driver.toLowerCase()
  })
}


function nameToAttributes(drivers){
  return drivers.map((driver)=>{
    return driver.split(" ").assign(
      
      {firstname: driver[0]},
      {lastname: driver[1]}
      
      
      )
  })
}

function attributesToPhrase(){
  
}