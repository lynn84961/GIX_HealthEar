import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppPicker from "./AppPicker";

function AppFormPicker({
  items,
  icon,
  name,
  numberOfColumns,
  numberOfLines = 1,
  placeholder,
  PickerItemComponent,
  ...otherProps
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        icon={icon}
        onSelectItem={(item) => setFieldValue(name, item)}
        numberOfLines={numberOfLines}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
