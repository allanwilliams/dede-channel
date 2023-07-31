import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';

interface Props extends SelectProps {
  name: string;
}

export default function Select({ name, ...rest }: Props) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error} = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.selectValue) {
            return [];
          }
          return ref.state.selectValue.map((option: any) => option.value);
        }
        if (!ref.state.selectValue.length) {
          return '';
        }
        return ref.state.selectValue[0].value;
      },
      setValue: (ref, value) => {
        ref.setValue(value || null);
      },
      clearValue: (ref) => {
        ref.clearValue();
      }
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <div>
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
      <span className='erro'>{error}</span>
    </div>
  );
};