import { Document } from 'mongoose';

export interface Template extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}