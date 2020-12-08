import React, {useState} from 'react';
import {ReactComponent as Heart} from '@/assets/icons/heart.svg';
import {ReactComponent as HeartActive} from '@/assets/icons/heart-active.svg';
import {createCn, cx} from '@/helpers';
import './styles.scss';

interface Props {
  className?: string;
}

const cn = createCn('like');
export const Like: React.FC<Props> = ({className}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevActive) => !prevActive);
  };

  return (
    <button
      type="button"
      className={cx(cn(), className)}
      onClick={handleToggle}
    >
      {isActive ? <HeartActive /> : <Heart />}
    </button>
  );
};
