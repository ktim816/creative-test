import React from 'react';
import {createCn} from '@/helpers';
import {User} from '@/components/User';
import {Like} from '@/components/Like';
import apartmentImage from '@/assets/images/apartment.jpg';
import {ApartmentInfo, UserInfo} from '@/interfaces';
import './styles.scss';

export interface ICard {
  id: number;
  type: string;
  attributes: ApartmentInfo;
  relationships: UserInfo;
}

interface Props {
  item: ICard;
}

const cn = createCn('card');
export const Card: React.FC<Props> = ({item}) => {
  const {attributes, relationships} = item;
  const {address} = attributes;
  return (
    <a href="#" className={cn()}>
      <div className={cn('top')}>
        <Like className={cn('like')} />
        <div className={cn('image')}>
          <img src={apartmentImage} alt="apartment preview" />
        </div>
      </div>
      <div className={cn('content')}>
        <div className={cn('info')}>
          <div className={cn('info-top')}>
            <span>{attributes.rooms} rooms</span>
            <span>
              {attributes.area} {attributes.unit}
            </span>
          </div>
          <h3 className={cn('title')}>{attributes.title}</h3>
          <div className={cn('address')}>
            {Object.values(address).join(', ').trim()}
          </div>
        </div>
        <User className={cn('user')} item={relationships} />
      </div>
    </a>
  );
};
