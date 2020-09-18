import React, { useEffect, useRef, useCallback } from 'react';
import { useField } from '@unform/core';

import { phone } from '../../utils/inputMask';

import { InputBlock } from './styles';

export default function Input({ name, label, mask, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputMask = useCallback(
    (e) => {
      if (mask === 'phone') {
        return phone(e);
      }
    },
    [mask]
  );

  return (
    <InputBlock>
      <label htmlFor={name}>
        {label}
        <input
          className={error ? 'has-error' : ''}
          id={name}
          ref={inputRef}
          defaultValue={defaultValue}
          onKeyUp={handleInputMask}
          {...rest}
        />
      </label>
      {error && <span className="error">{error}</span>}
    </InputBlock>
  );
}
