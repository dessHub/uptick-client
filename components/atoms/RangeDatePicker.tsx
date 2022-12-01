import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function RangeDatePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <div className="flex justify-start items-start md:items-center flex-col md:flex-row shadow-md bg-white px-5 py-2 md:py-0 mb-2 md:mb-1">
      <label className="mb-2 md:mb-0 ">Filter By Date</label>

      <div className="flex flex-row items-center m-1 md:m-5 gb">
        <DatePicker
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={date => setStartDate(date)}
        />
        <span className="m-2">To</span>
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={date => setEndDate(date)}
        />
      </div>
    </div>
  );
}

RangeDatePicker.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func,
  endDate: PropTypes.instanceOf(Date),
  setEndDate: PropTypes.func,
};
