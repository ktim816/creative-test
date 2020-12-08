import React from 'react';
import userImage from '@/assets/images/avatar.jpg';
import {createCn, cx} from '@/helpers';
import {UserInfo} from '@/interfaces';
import './styles.scss';

interface Props {
  item: UserInfo;
  className?: string;
}

const cn = createCn('user');
export const User: React.FC<Props> = ({item, className}) => {
  return (
    <div className={cx(cn(), className)}>
      <div className={cn('image')}>
        <img src={userImage} alt="user avatar" />
      </div>
      <div className={cn('info')}>
        {Object.values(item.attributes).join(' ').trim()}
      </div>
    </div>
  );
};
