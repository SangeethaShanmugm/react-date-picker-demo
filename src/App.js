import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { addDays } from "date-fns";
function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  // const addDays = new Date();
  return (
    <div className="App">
      <DatePicker
        selected={selectedDate}
        placeholderText={"dd/mm/yyyy"}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        maxDate={addDays(new Date(), 5)}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        showYearDropdown
        // yearDropdownItemNumber={30}
        //  showYearPicker
        // showTimeSelect
        scrollableYearDropdown
      />
    </div>
  );
}

export default App;
