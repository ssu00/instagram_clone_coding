import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
const Fifth = () => {
    const [date, setDate] = useState(new Date());
  // const onChange = (selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === "ios");
  //   setDate(currentDate);
  //   console.log(currentDate);
  // };
  return (
    <DateTimePicker
      value={date}
      mode="date"
      display="spinner"
      locale="ko-KR" 
            // onChange={onChange}
    />
  );
};
export default Fifth;
