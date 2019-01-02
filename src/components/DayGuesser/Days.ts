export enum Day {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export function dateIsDay(date: Date, day: Day): boolean {
  return date.getDay() === day;
}
