import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type } from 'os';
import * as React from 'react';

export interface InputProps {
  height?: string;
  rounded?: number;
  className?: string;
  placeholder?: string;
  classNameInput?: string;
  nameIcon?: any;
  classIcon?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: string;
}

export default function Input(props: InputProps) {
  const {
    height,
    rounded,
    className,
    placeholder,
    onFocus,
    onBlur,
    classNameInput,
    classIcon,
    nameIcon,
    type,
  } = props;

  return (
    <div className={`input ${className}`}>
      <div className="relative">
        <input
          type={type}
          className={`block w-full text-title-color border border-[#ccc] focus:outline-none ${classNameInput} `}
          placeholder={`${placeholder}`}
          style={{ borderRadius: `${rounded}px`, height }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {nameIcon && <FontAwesomeIcon icon={nameIcon} className={classIcon} />}
      </div>
    </div>
  );
}
