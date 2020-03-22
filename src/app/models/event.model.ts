import {Picture} from './picture.model';

export class Event {
  name: string;
  organizer: string;
  dates: Date[];
  picture: Picture;
  receivedHours: number;
  report: string;

  constructor(name: string, organizer: string, dates: Date[], picture: Picture, receivedHours: number, report: string) {
    this.name = name;
    this.organizer = organizer;
    this.dates = dates;
    this.picture = picture;
    this.receivedHours = receivedHours;
    this.report = report;
  }
}
