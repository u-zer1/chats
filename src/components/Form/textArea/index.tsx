import React from 'react';
import classNames from 'classnames';
import './style.scss';

import { IFormFields } from '../types';

interface ITextArea extends IFormFields<HTMLTextAreaElement> {
  textareaClassname?: string;
}

export const Textarea: React.FC<ITextArea> = ({
  id,
  label,
  maxHeight = 300,
  minHeight = 42,
  maxLength = 2000,
  IconAfter,
  IconBefore,
  placeholder,
  className,
  textareaClassname,
  name,
  value,
  onChange,
  IconBeforeClick,
  IconAfterClick,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.scrollHeight <= maxHeight) {
      e.target.style.height = `${minHeight}px`;
      e.target.style.height = `${e.target.scrollHeight}px`;
      e.target.style.overflow = 'hidden';
    } else {
      e.target.style.height = `${maxHeight}px`;
      e.target.style.overflow = 'auto';
    }

    return onChange(e);
  };

  return (
    <div className={classNames('textarea_wrapper', className)}>
      {label && <label htmlFor={id || name}>{label}</label>}
      <textarea
        id={id || name}
        name={name}
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        placeholder={placeholder}
        className={classNames('textarea', IconBefore && 'l__indent', IconAfter && 'r__indent', textareaClassname)}
      />
      <div className="icon-container">
        {IconAfter && <IconAfter onClick={IconBeforeClick} className="after-icon" />}
        {IconBefore && <IconBefore onClick={IconAfterClick} className="before-icon" />}
      </div>
    </div>
  );
};
