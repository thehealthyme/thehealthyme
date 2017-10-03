import React from 'react';
import moment from 'moment';

const WaterEntry = ({entry}) => {
  return (
    <div className="feed-entry-container">
      <div className="feed-entry-header">
        <i className="feed-entry-icon mdi mdi-24px mdi-cup-water"></i>
        <div className="feed-entry-time">{moment(entry.datetime).calendar()}</div>
      </div>
      <div className="feed-entry-content">
        <div className="feed-entry-detail">{entry.waterAmount} fl oz</div>
      </div>
    </div>
  );

};

export default WaterEntry;