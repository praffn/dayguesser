import React from 'react';

import { Day } from './Days';
import DayButton from './DayButton';

interface Props {
  onDayClick: (day: Day) => void;
}

const DayList = (props: Props) => (
  <ul className="DayList">
    <li className="DayList-Item">
      <DayButton
        onClick={props.onDayClick}
        label="Sunday"
        value={Day.Sunday} />
    </li>
    <li className="DayList-Item">
      <DayButton
        onClick={props.onDayClick}
        label="Monday"
        value={Day.Monday} />
    </li>
    <li className="DayList-Item">
      <DayButton
        onClick={props.onDayClick}
        label="Tuesday"
        value={Day.Tuesday} />
    </li>
    <li className="DayList-Item">
      <DayButton
        onClick={props.onDayClick}
        label="Wednesday"
        value={Day.Wednesday} />
    </li>
    <li className="DayList-Item">
      <DayButton
        onClick={props.onDayClick}
        label="Thursday"
        value={Day.Thursday} />
    </li>
    <li className="DayList-Item">
      <DayButton
        onClick={props.onDayClick}
        label="Friday"
        value={Day.Friday} />
    </li>
    <li className="DayList-Item">
      <DayButton
        onClick={props.onDayClick}
        label="Saturday"
        value={Day.Saturday} />
    </li>
  </ul>
);

export default DayList;
