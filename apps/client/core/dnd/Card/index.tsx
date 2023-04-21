import { useDrag, useDrop } from 'react-dnd';
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
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: CardType,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        console.log('item', item);
      }
    }
  }))

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: CardType,
    item: {
      index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <div ref={drop}>
      <div
        ref={drag}
        className={cx(classes.root, {
          [classes.isDragging]: isDragging,
        })}
      >
        {name}
      </div>
    </div>
  )
}

export default Card;