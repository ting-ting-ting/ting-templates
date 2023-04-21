import { useState, useRef, useEffect, memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { cx } from '@mezzanine-ui/react';
import { onHoverOrDrop } from '../utils/action';
import { CardType } from '../constants';
import classes from './index.module.scss';

enum HoverType {
  Left = 'Left',
  Right = 'Right',
}
interface CardProps {
  name: string;
  index: number;
  changeByIndex: (from: number, to: number) => void;
}

const Card: FC<CardProps> = ({
  name,
  index,
  changeByIndex,
}) => {
  const [hoverType, setHoverType] = useState<HoverType | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: CardType,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    hover: (item, monitor) => {
      const dragIndex = (item as { index: number }).index;
      const hoverIndex = index;

      onHoverOrDrop({
        monitor,
        dragIndex,
        hoverIndex,
        targetCurrent: ref.current,
        onLeft: () => {
          setHoverType(HoverType.Left);
        },
        onRight: () => {
          setHoverType(HoverType.Right);
        },
      });
    },
    drop: (item, monitor) => {
      const dragIndex = (item as { index: number }).index;
      const hoverIndex = index;

      onHoverOrDrop({
        monitor,
        dragIndex,
        hoverIndex,
        targetCurrent: ref.current,
        onLeft: () => {
          changeByIndex(dragIndex, index);
        },
        onRight: () => {
          changeByIndex(dragIndex, index + 1);
        },
      });
    },
  }));

  useEffect(() => {
    if (!isOver) {
      setHoverType(null);
    }
  }, [isOver])

  drop(ref);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: CardType,
    item: {
      index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <div
      ref={ref}
      className={cx(classes.drop, {
        [classes.hoverLeft]: hoverType === HoverType.Left,
        [classes.hoverRight]: hoverType === HoverType.Right,
      })}
    >
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

export default memo(Card);