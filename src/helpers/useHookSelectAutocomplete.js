import {  useEffect, useState } from "react";
export const useHookSelectAutocomplete = (
  getlabel = { label: null },
  getBadgeLoading
) => {
  const [label, setLabel] = useState(getlabel.label);
  const [loading, setLoading] = useState(getBadgeLoading);
  const [errorItem, setErrorItem] = useState({
    status: false,
    message: getlabel.errorMsg,
  });

  const [idItem, setIdItem] = useState();
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState();
  const HandleChangeItem = (value) => {
    setIdItem(value?.id);
    setValue(value);
  };
  const HandleChangeInput = (value) => {
    setInputValue(value);
  };
  const HandleError = () => {
    if (idItem) {
      setErrorItem({
        ...errorItem,
        status: false,
      });
    } else {
      setErrorItem({
        ...errorItem,
        status: true,
      });
    }
  };
  useEffect(() => {
    HandleError();
  }, [idItem]);
  return {
    value,
    inputValue,
    setInputValue,
    idItem,
    HandleChangeItem,
    HandleChangeInput,
    errorItem,
    setIdItem,
    //Loading
    loading,
    setLoading,
    //Label Select
    label,
  };
};

