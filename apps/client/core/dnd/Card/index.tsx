import { useDrag } from 'react-dnd';
import { CardType } from '../constants';

const Card = () => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: CardType,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
      <div ref={drag}>Card</div>
    </div>
  );
}

export default Card;