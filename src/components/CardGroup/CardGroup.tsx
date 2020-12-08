import React from 'react';
import {createCn, cx} from '@/helpers';
import {Card, ICard} from './Card';
import './styles.scss';

interface Props {
  items: ICard[];
  className?: string;
}

const cn = createCn('card-group');
export const CardGroup: React.FC<Props> = ({items, className}) => {
  const renderCard = (item: ICard) => <Card key={item.id} item={item} />;
  return <div className={cx(cn(), className)}>{items.map(renderCard)}</div>;
};
