import React, { Component } from 'react';

import DayList from './DayList';
import Warehouse from '../../Warehouse';
import { Day, dateIsDay } from './Days';

const DG_NAMESPACE = 'dayguesser::0.0.1';

interface DayGuesserState {
  date: Date;
  points: number;
}

const YEAR = (new Date()).getFullYear();
const START_DATE = (new Date(YEAR, 0, 1)).getTime();
const END_DATE = (new Date(YEAR, 11, 31)).getTime();

function generateRandomDate(start = START_DATE, end = END_DATE): Date {
  return new Date(start + Math.random() * (end - start));
}

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar',
  'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec',
];

function dateToString(date: Date): string {
  const month = MONTH_NAMES[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  console.log(date);
  return `${month} ${day}, ${year}`;
}

export default class DayGuesser extends Component<{}, DayGuesserState> {
  private readonly warehouse: Warehouse;

  constructor(props: any) {
    super(props);
    this.warehouse = new Warehouse(DG_NAMESPACE);
    this.guessDay = this.guessDay.bind(this);
    this.resetPoints = this.resetPoints.bind(this);
    this.state = {
      points: 0,
      date: generateRandomDate(),
    }
  }

  guessDay(day: Day) {
    if (dateIsDay(this.state.date, day)) {
      this.incrementPoints(1);
    } else {
      this.incrementPoints(-1);
    }
    this.newDate();
    // const d = parseInt(Day[day]);
    // if (dateIsDay(this.state.date, d)) {
    //   this.incrementPoints(1);
    // } else {
    //   this.incrementPoints(-1);
    // }
    // this.newDate();
  }

  newDate() {
    const date = generateRandomDate();
    this.setState({ date });
  }

  incrementPoints(by: number) {
    let points = this.state.points + by;
    points = points < 0 ? 0 : points;
    this.warehouse.set('points', points);
    this.setState({ points });
  }

  resetPoints() {
    const points = 0;
    this.warehouse.set('points', points);
    this.setState({ points });
  }

  render() {
    return (
      <div className="DayGuesser">
        <header className="DayGuesser-Header">
          <h1 className="DayGuesser-Date">{ dateToString(this.state.date) }</h1>
          <p onClick={this.resetPoints} className="DayGuesser-Points">{ this.state.points }</p>
        </header>
        
        <DayList onDayClick={this.guessDay}/>
      </div>
    );
  }

  componentDidMount() {
    const points = this.warehouse.getOrDefault<number>('points', 0);
    this.setState({ points });
  }
}
