import { useRef } from 'react';
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
  const ref = useRef<HTMLDivElement | null>(null);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: CardType,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    hover: (item, monitor) => {
      const dragIndex = (item as { index: number }).index;
      const hoverIndex = index;

      if (dragIndex !== hoverIndex && ref.current) {
        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
        const clientOffset = monitor.getClientOffset();

       if (clientOffset) {
        const hoverClientX = clientOffset.x - hoverBoundingRect.left;

        if (hoverClientX < hoverMiddleX) {
          console.log('target', index)
        } else {
          console.log('target', index + 1)
        }
       }
      }
    }
  }));

  drop(ref);

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
    <div ref={ref}>
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