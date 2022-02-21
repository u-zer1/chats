import React from 'react';
import './style.scss';

interface ListProps<T> {
  items: T[];
  scroll?: boolean;
  className?: string;
  onClick?: (idx: number) => void;
  renderItem: (item: T, idx?: number) => React.ReactNode;
}

type exType = any | undefined;

export const List = <T extends exType>({ items, scroll, onClick, className, renderItem }: ListProps<T>) => {
  const isClicked = (id: number) => (onClick ? onClick(id) : {});
  const isScroll = scroll ? 'list-scroll' : '';

  return (
    <ul className={`list ${className || ''} ${isScroll}`}>
      {items.map((e: any, idx: number) => (
        <li key={e.id || idx} onClick={() => isClicked(idx)} className="list__item" tabIndex={idx + 1} aria-hidden="true">
          {renderItem(e, idx)}
        </li>
      ))}
    </ul>
  );
};
