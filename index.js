// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return drivers.map((driver)=>{
    return driver.toLowerCase()
  })
}


function nameToAttributes(drivers){
  return drivers.map((driver)=>{
    let fullName = driver.split(" ")
    
    
    // fullName.assign(
    //   {firstname: fullName[0],
    //   lastname: fullName[1]})
      
    // return fullName
    
    let driverFirstName = fullName[0]
    let driverLastName = fullName[1]
  })
}

function attributesToPhrase(){
  
}