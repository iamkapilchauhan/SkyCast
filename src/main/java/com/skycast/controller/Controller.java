package com.skycast.controller;
import com.skycast.dto.WeatherForeCast;
import com.skycast.dto.WeatherResponse;
import com.skycast.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/weather")
public class Controller
{
    @Autowired
    private WeatherService service;

    @GetMapping("/forecast")
    public WeatherForeCast getForecast(@RequestParam String city, @RequestParam int days)
    {
        return service.getForecast(city,days);
    }
}
