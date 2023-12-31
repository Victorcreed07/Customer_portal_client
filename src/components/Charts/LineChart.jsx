import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const LineChart = ({ data }) => {
  return (
    <Timeline position="alternate">
      {data.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index < data.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <h3>{item.date}</h3>
            <p>{item.description}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default LineChart;
