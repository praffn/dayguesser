import React from 'react';

import { Day } from './Days';

interface Props {
  label: string;
  value: Day,
  onClick: (day: Day) => void;
}

const DayButton = (props: Props) => (
  <div className="DayButton" onClick={() => props.onClick(props.value)}>
    { props.label }
  </div>
);

export default DayButton;
