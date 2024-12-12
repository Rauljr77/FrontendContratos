export interface IBaseError {
  value       : string;
  errorItems  : IBaseErrorItem[];
}

export interface IBaseErrorItem {
  message : string;
  condition(): boolean;
}