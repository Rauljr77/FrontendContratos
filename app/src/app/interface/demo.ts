export interface City {
  name: string;
  code: string;
}
  
export interface Country {
  name?: string;
  code?: string;
}
  
export interface Representative {
  name  ?: string;
  image ?: string;
}

export interface Customer {
  id            ?: number;
  name          ?: string;
  country       ?: Country;
  company       ?: string;
  date          ?: string | Date;
  status        ?: string;
  activity      ?: number;
  representative?: Representative;
  verified      ?: boolean;
  balance       ?: number;
}

export interface IWeatherForecast {
  date        : string;
  temperatureC: number;
  temperatureF: number;
  summary     : string;
}

export interface IUser {
  _id         : string;
  id          : number;
  roleName    : string;
  username    : string;
  email       : string;
  fullname    : string;
  status      : boolean;
  createdAt   : string;
  passwordHash: string;
  updatedAt   : string;
  permissions : string;
}