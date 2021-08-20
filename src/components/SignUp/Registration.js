import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeField, Initialize } from "../../redux/reducers/update";
import SignUpStack from "../../navigations/SignUp";
const Registration = ({navigation}) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ update }) => ({
    form: update.update,
  }));
  const onChange = (name) => (e) => {
    //update values
    let value=e;
    dispatch(
      ChangeField({
        form: "update",
        key: name,
        value,
      })
    );
  };

  useEffect(() => {
    //페이지 initialize
    dispatch(Initialize("update"));
  }, [dispatch]);

  return <SignUpStack type="update" navigation={navigation} form={form} handleChange={onChange} />;
};

export default Registration;
