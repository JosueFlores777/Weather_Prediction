import React from 'react';
import Spinner from './spinner';
import Swal from 'sweetalert2';
const Card = ({ loadingData, showData, weather, forecast }) => {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var url = "";
    var iconUrl = "";
    var iconUrl3H = "";
    var iconUrl6H = "";
    var iconUrl9H = "";
    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    if (showData) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        iconUrl3H = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6H = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9H = url + forecast.list[3].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
    }

    if (loadingData) {
        return <Spinner />;
    }

    return (
        <div className="mt-5">
            {showData === true ? (
                <div className="container">
                    <div className="card mb-3 mx-auto text-light">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <h3 className="card-title">{weather.name}</h3>
                                <p className='card-date' >{date}</p>
                                <h1 className='card-temp'>{(weather.main.temp - 272.15).toFixed(1)} °C</h1>
                                <p className='card-desc'><img src={iconUrl} alt='icon'></img>{weather.weather[0].description}</p>
                                <img
                                    src="https://images.pexels.com/photos/356286/pexels-photo-356286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="img-fluid rounded-start"
                                    alt="bd24"
                                ></img>

                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-start mt-2">
                                    <h5 className='card-text text-dark'>Maximum temperature: {weather.main.temp_max}°C</h5>
                                    <h5 className='card-text text-dark'>Minimum temperature: {weather.main.temp_min}°C</h5>
                                    <h5 className='card-text text-dark'>Thermal sensation: {weather.main.feels_like}°C</h5>
                                    <h5 className='card-text text-dark'>Humidity: {weather.main.humidity}%</h5>
                                    <h5 className='card-text text-dark'>Wind speed: {weather.wind.speed}m/s</h5>
                                </div>
                                <hr></hr>
                                <div className='row mt-2 container1'>
                                    <div className='col redb'>
                                          <p className='text-dark date'>{forecastDate3}h</p>
                                            <div className="description">
                                                <img className='icon' src={iconUrl3H} alt="icon" />
                                                <p className="mb-1">{forecast.list[1].weather[0].description}</p>
                                            </div>
                                            <p className="tempe text-dark">{(forecast.list[1].main.temp - 273.15).toFixed(3)}ºC</p>
                                 
                                    </div>
                                    <div className='col greenb'>
                                        <p className='text-dark date'>{forecastDate6}h</p>
                                        <div className="description">
                                            <img className='icon' src={iconUrl6H} alt="icon" />
                                            <p className="mb-1">{forecast.list[2].weather[0].description}</p>
                                        </div>
                                        <p className="tempe text-dark">{(forecast.list[2].main.temp - 273.15).toFixed(3)}ºC</p>
                                    </div>
                                    <div className='col blueb'>
                                        <p className='text-dark date'>{forecastDate9}h</p>
                                        <div className="description">
                                            <img className='icon' src={iconUrl9H} alt="icon" />
                                            <p className="mb-1">{forecast.list[3].weather[0].description}</p>
                                        </div>
                                        <p className="tempe text-dark">{(forecast.list[3].main.temp - 273.15).toFixed(3)}ºC</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No data available or enter valid information"
    
                  }),
                <h2>No data</h2>
            )}
        </div>
    );
};

export default Card;
