
let apikey='4c768511a315afe551682a3924ff194a';
let apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
let searchBox=document.querySelector('.search input');
let searchBtn=document.querySelector('.search button');
let weatherIcon=document.querySelector('.weather-icon')
let temp=document.querySelector('.temp');
let weather=document.querySelector('.weather');
let error=document.querySelector('.error')

async function checkWeather(city){
    let res=await fetch(apiUrl+city+`&appid=${apikey}`);
let data=await res.json();
console.log(data);



if(res.status==404){
  error.style.display='block';
    weather.style.display='none'
}else{
    temp.innerHTML= Math.floor(data.main.temp)+'°C';
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
    document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';
    
    if(data.weather[0].main=='Clouds'){
        weatherIcon.src='images/clouds.png'
    }else if(data.weather[0].main=='Rain'){
        weatherIcon.src='images/rain.png'
    }else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src='images/drizzle.png'
    }else if(data.weather[0].main=='Mist'){
        weatherIcon.src='images/mist.png'
    }
    
    weather.style.display='block';
    error.style.display='none'


}

}


searchBtn.addEventListener('click', ()=>{



    checkWeather(searchBox.value)
    checkWeather()
    searchBox.value='';
})





































