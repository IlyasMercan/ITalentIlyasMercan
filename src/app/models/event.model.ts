export class Event {
  name: string;
  organizer: string;
  dates: Date[];
  urlsOfPictures: string[];
  receivedHours: number;
  report: string;

  constructor(name: string, organizer: string, dates: Date[], urlsOfPictures: string[], receivedHours: number, report: string) {
    this.name = name;
    this.organizer = organizer;
    this.dates = dates;
    this.urlsOfPictures = urlsOfPictures;
    this.receivedHours = receivedHours;
    this.report = report;
  }
}
