const request = require('request')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forecast')

const address = process.argv[2]
// console.log(process.argv)

if (!address){
    console.log('Please provide an')
}else{
    geocode(address,(error,{latitude,Longtitude,location})=>{
        if (error){
            return console.log(error)
        }        
        // console.log(data)
        forcast(latitude,Longtitude ,(error,data)=>{
            if (error){
                return console.log(error)
            }else{         
                console.log('Summary : ',data.summary)
                console.log('Temperature : ',data.temperature)
                console.log('PrecipProbability : ', data.precipProbability)
            }
        })
    })
}



