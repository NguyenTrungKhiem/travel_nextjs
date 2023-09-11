'use client';
import * as React from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

export interface IDatepickerCustomProps {
  classInputCustom?: string;
}

export default function DatepickerCustom(props: IDatepickerCustomProps) {
  const { classInputCustom } = props;
  const [value, setValue] = React.useState<any>({
    startDate: new Date(),
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };
  return (
    <div>
      <Datepicker
        primaryColor="blue"
        separator={'~'}
        value={value}
        onChange={handleValueChange}
        popoverDirection="down"
        displayFormat={'DD-MM-YYYY'}
        inputClassName={`${classInputCustom}`}
      />
    </div>
  );
}
