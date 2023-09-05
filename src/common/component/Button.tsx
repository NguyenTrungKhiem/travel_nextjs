import * as React from 'react';

export interface IButtonProps {
  className?: string;
  text?: string;
}

export default function Button(props: IButtonProps) {
  const { className, text } = props;
  return (
    <button className={`${className} flex justify-center items-center`}>
      <span>{text}</span>
    </button>
  );
}
