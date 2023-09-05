import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export interface IIconProps {
  icon?: any;
  className?: any;
}

export default function Icon(props: IIconProps) {
  const { icon, className } = props;
  return <FontAwesomeIcon icon={icon} className={`${className}`} />;
}
