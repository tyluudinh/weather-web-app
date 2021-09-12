export interface Place {
  lat: number;
  lon: number;
}
export interface BMI {
  weight: number;
  height: number;
}
export interface BMIResult extends BMI {
  image: string;
  result: number;
  description: string;
}
export const defaultBMI: BMI = {
  weight: 100,
  height: 1.5,
};

export interface Weather {
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface ServiceError {
  statusCode: number;
  message: string;
}
