import React from 'react';

export const Calendar = () => {
  return (
    <div class="card widget-calendar h-100">
      <div class="card-header p-3 pb-0">
        <h6 class="mb-0">Calendar</h6>
        <div class="d-flex">
          <div class="p text-sm font-weight-bold mb-0 widget-calendar-day"></div>
          <span>,&nbsp;</span>
          <div class="p text-sm font-weight-bold mb-1 widget-calendar-year"></div>
        </div>
      </div>
      <div class="card-body p-3">
        <div data-toggle="widget-calendar"></div>
      </div>
    </div>
  );
};
