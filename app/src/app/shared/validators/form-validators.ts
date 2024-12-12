import { IBaseError, IBaseErrorItem } from "../error/error.interface";

export const getConfigError = (value: string, isBlur: boolean = false): IBaseError => {
  return {
    value,
    errorItems: [isEmpty(value, isBlur), onlyChar(value), maxLength(value, 30)]
  };
}

export const getConfigErrorCalendar = (value: string, isBlur: boolean): IBaseError => {
  return {
    value,
    errorItems: [isEmpty(value, isBlur), minDateToday(value)]
  };
}

export const isEmpty = (value: string, isBlur: boolean): IBaseErrorItem => {
  return {
    message: "Campo requerido",
    condition:() => !value && isBlur
  };
}

export const onlyChar = (value: string, message: string = "No colocar números"): IBaseErrorItem => {
  return {
    message,
    condition:() => {
      return /\d/.test(value)
    }
  };
}

export const maxLength = (value: string, max: number, message: string = `Máximo ${max} caracteres`): IBaseErrorItem => {
  return {
    message,
    condition: () => value.length > max
  };
};

export const minDateToday = (value: string, message: string = "La fecha debe ser hoy o posterior"): IBaseErrorItem => {
  return {
    message,
    condition: () => {
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Asegúrate de comparar solo las fechas, no las horas
      return selectedDate < today;
    }
  };
};