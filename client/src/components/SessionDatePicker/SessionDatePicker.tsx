import { useState, useEffect } from 'react';
import dayjs, {Dayjs} from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function SessionDatePicker({ handleDate }) {

  const [currDate, setCurrDate] = useState<Dayjs| any>(dayjs('2023-06-02'));
  useEffect(() => {
    let { $D} = currDate;
    const {$M, $y } = currDate
    if ($D < 10)
      $D = `0${$D}`;
    handleDate(`${$y}-${$M}-${$D}`);
  }, [currDate])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'StaticDatePicker',
        ]}
      >
        
      <StaticDatePicker
        defaultValue={dayjs(currDate)}
        onChange={(newValue) => newValue && setCurrDate(newValue)}
        slotProps={{
          actionBar: { actions: [] },
        }}
        disablePast />
      </DemoContainer>
    </LocalizationProvider>
  );
}