// fetch(`http://api.weatherapi.com/v1/current.json?key=dd9b06af19af4d0c86690056241802&q=pune`)
//     .then(res => res.json())
//     .then(data => {
//         html += `
//                     <div class="location">
//                         <h2>City: ${data.location.name}</h2>
//                         <div class="region">
//                             <p>State: ${data.location.region}</p>
//                             <p>Country: ${data.location.country}</p>
//                         </div>
//                         <div class="location-parameter">
//                             <h3>Location</h3>
//                             <div class="location-para">
//                                 <p>Latitude: ${data.location.lat}</p>
//                                 <p>Longitude: ${data.location.lon}</p>
//                             </div>
//                         </div>
//                         <h3 class="time">Time: ${data.location.localtime.slice(11)}</h3>
//                         <img src="${data.current.condition.icon}"/>
//                     </div>
//                     <div class="current">
//                         <p class="humidity">Humidity: ${data.current.humidity}</p>
//                         <div class="temp">
//                             <h3>Temprature</h3>
//                             <div class="temp-para">
//                                 <p>Celcius: ${data.current.temp_c} °C </p>
//                                 <p>Fahrenheit: ${data.current.temp_f} °F</p>                        
//                             </div>
//                         </div>
//                         <div class="wind-parameter">
//                             <h3>Wind Speed</h3>
//                             <div class="wind">
//                                 <p>Wind Direction &nbsp ${data.current.wind_dir}</p>
//                                 <p>Wind Speed/kph &nbsp ${data.current.wind_kph}</p>
//                                 <p>Wind Speed/mph &nbsp ${data.current.wind_mph}</p>
//                             </div>
//                         </div>
//                     </div>
//                 `

//         weatherData.innerHTML = html
//     })




// fetch(`http://api.weatherapi.com/v1/current.json?key=dd9b06af19af4d0c86690056241802&q=${userInputValue}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         html = `
    //                 <div class="location">
    //                     <h2>City: ${data.location.name}</h2>
    //                     <div class="region">
    //                         <p>State: ${data.location.region}</p>
    //                         <p>Country: ${data.location.country}</p>
    //                     </div>
    //                     <div class="location-parameter">
    //                         <h3>Location</h3>
    //                         <div class="location-para">
    //                             <p>Latitude: ${data.location.lat}</p>
    //                             <p>Longitude: ${data.location.lon}</p>
    //                         </div>
    //                     </div>
    //                     <h3 class="time">Time: ${data.location.localtime.slice(11)}</h3>
    //                     <img src="${data.current.condition.icon}"/>
    //                 </div>
    //                 <div class="current">
    //                     <p class="humidity">Humidity: ${data.current.humidity}</p>
    //                     <div class="temp">
    //                         <h3>Temprature</h3>
    //                         <div class="temp-para">
    //                             <p>Celcius: ${data.current.temp_c} °C </p>
    //                             <p>Fahrenheit: ${data.current.temp_f} °F</p>                        
    //                         </div>
    //                     </div>
    //                     <div class="wind-parameter">
    //                         <h3>Wind Speed</h3>
    //                         <div class="wind">
    //                             <p>Wind Direction &nbsp ${data.current.wind_dir}</p>
    //                             <p>Wind Speed/kph &nbsp ${data.current.wind_kph}</p>
    //                             <p>Wind Speed/mph &nbsp ${data.current.wind_mph}</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             `
    //         weatherData.innerHTML = html
    //     })


    // <p>Fahrenheit: ${data.current.temp_f} °F</p>  