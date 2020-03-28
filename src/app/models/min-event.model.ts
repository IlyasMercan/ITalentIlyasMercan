import {Location} from './location.model';

export class MinimalEvent {
  name: string;
  description: string;
  locations: Location[];
  dates: Date[];
  receivedHours: number;
  extra: boolean;


  constructor(name: string, description: string, locations: Location[], dates: Date[], receivedHours: number, extra: boolean) {
    this.name = name;
    this.description = description;
    this.locations = locations;
    this.dates = dates;
    this.receivedHours = receivedHours;
    this.extra = extra;
  }
}
