import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export interface IButtonProps {
  className?: string;
  text?: string;
  icon?: any;
  classIcon?: string;
  onClick?: () => void;
}

export default function Button(props: IButtonProps) {
  const { className, text, icon,classIcon,onClick } = props;
  return (
    <button className={`${className} flex justify-center items-center`} onClick={onClick}>
      {text && <span>{text}</span>}
      {icon && (
        <FontAwesomeIcon icon={icon} className={`${classIcon}`} />
      )}
    </button>
  );
}
