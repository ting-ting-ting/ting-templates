import { useState, useRef, useEffect, memo } from 'react';
import { useDrag, useDrop, DragPreviewImage } from 'react-dnd';
import { cx } from '@mezzanine-ui/react';
import logo from '@public/images/mezzanine.svg';
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
      const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex || !ref.current) {
          return;
        }
        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();

        if (!clientOffset) return;

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex + 1 < hoverIndex && hoverClientY < hoverMiddleY) {

          changeByIndex(dragIndex, hoverIndex - 1);
          item.index = hoverIndex - 1;
          return;
        }

        if (dragIndex > hoverIndex + 1 && hoverClientY > hoverMiddleY) {

          changeByIndex(dragIndex, hoverIndex + 1);
          item.index = hoverIndex + 1;
          return;
        }

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }


        changeByIndex(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
    },
    // drop: (item, monitor) => {
    //   const dragIndex = (item as { index: number }).index;
    //   const hoverIndex = index;

    //   onHoverOrDrop({
    //     monitor,
    //     dragIndex,
    //     hoverIndex,
    //     targetCurrent: ref.current,
    //     onLeft: () => {
    //       changeByIndex(dragIndex, index);
    //     },
    //     onRight: () => {
    //       changeByIndex(dragIndex, index + 1);
    //     },
    //   });
    // },
  }));

  useEffect(() => {
    if (!isOver) {
      setHoverType(null);
    }
  }, [isOver])

  drop(ref);

  const [{ isDragging }, drag, preview] = useDrag(() => ({
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
      <DragPreviewImage src={logo} connect={preview} />
    </div>
  )
}

export default memo(Card);