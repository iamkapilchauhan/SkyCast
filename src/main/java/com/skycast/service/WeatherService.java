package com.skycast.service;

import com.skycast.dto.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class WeatherService {

    @Value("${weather.api.key}")
    private String apiKey;

    @Value("${weather.api.forecast.url}")
    private String apiUrlForecast;

    private final RestTemplate template = new RestTemplate();

    public WeatherForeCast getForecast(String city, int days) {

        String url = apiUrlForecast +
                "?key=" + apiKey +
                "&q=" + city +
                "&days=" + days;

        Root apiResponse = template.getForObject(url, Root.class);

        WeatherResponse weatherResponse = new WeatherResponse();

        weatherResponse.setCity(apiResponse.getLocation().getName());
        weatherResponse.setRegion(apiResponse.getLocation().getRegion());
        weatherResponse.setCountry(apiResponse.getLocation().getCountry());
        weatherResponse.setCondition(apiResponse.getCurrent().getCondition().getText());
        weatherResponse.setTemperature(apiResponse.getCurrent().getTemp_c());

        List<DayTemp> dayList = new ArrayList<>();

        for (Forecastday day : apiResponse.getForecast().getForecastday()) {

            DayTemp temp = new DayTemp();

            temp.setDate(day.getDate());
            temp.setMinTemp(day.getDay().getMintemp_c());
            temp.setAvgTemp(day.getDay().getAvgtemp_c());
            temp.setMaxTemp(day.getDay().getMaxtemp_c());

            dayList.add(temp);
        }

        WeatherForeCast forecast = new WeatherForeCast();
        forecast.setWeatherResponse(weatherResponse);
        forecast.setDayTemp(dayList);

        return forecast;
    }
}