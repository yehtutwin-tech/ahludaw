import { ObjectId } from 'mongodb';

export interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password?: string;
  status?: boolean;
  emailVerified?: Date | null;
  createdAt: Date;
}
export interface Contact {
  _id: ObjectId;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}
export interface Donor {
  _id: ObjectId;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
}
export interface CashIn {
  _id: ObjectId;
  date: Date;
  amount: number;
  donor: Donor;
  paymentMethod: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}
export interface CashOut {
  _id: ObjectId;
  date: Date;
  amount: number;
  donor: Donor;
  paymentMethod: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}
