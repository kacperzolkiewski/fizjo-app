import React, { ReactElement } from "react";

export const createHoursSelectOptions = () => {
  const options: ReactElement[] = [];

  for (let hour = 0; hour < 24; hour++) {
    options.push(
      <option key={hour} value={hour}>{`${String(hour).padStart(
        2,
        "0"
      )}:00`}</option>
    );
  }
  return options;
};
