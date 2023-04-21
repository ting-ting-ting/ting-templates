import { useDrag } from 'react-dnd';
import { cx } from '@mezzanine-ui/react';
import { CardType } from '../constants';
import classes from './index.module.scss';

interface CardProps {
  name: string;
  index: number;
}

const Card: FC<CardProps> = ({
  name,
  index,
}) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: CardType,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      className={cx(classes.root, {
        [classes.isDragging]: isDragging,
      })}
    >
      {name}
    </div>
  )
}

export default Card;