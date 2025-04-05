import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './DataField.module.css';
import ErrorValidationWrapper from '../ErrorValidationWrapper/ErrorValidationWrapper';

const DataField = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  return (
    <ErrorValidationWrapper name={name}>
      <DatePicker
        selected={field.value}
        onChange={(value) => setFieldValue(name, value)}
        className={s.input}
        calendarClassName={s.calendar}
        dayClassName={() => s.day}
        formatWeekDay={(day) => day.toUpperCase().slice(0, 3)}
        popperClassName={s.datePickerPopper}
        placeholderText="Booking date"
      />
    </ErrorValidationWrapper>
  );
};

export default DataField;
