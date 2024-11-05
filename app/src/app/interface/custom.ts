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

export interface IFinance {
  id        : number;
  userId    : string;
  yearMonth : string;
  createdAt : string;
  updatedAt : string;
  income    : IFinanceDetail[];
  expenses  : IFinanceDetail[];
}

export interface IFinanceDetail {
  description : string;
  amount      : number;
  category    : string;
}