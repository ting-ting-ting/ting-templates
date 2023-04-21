import { useDrop } from 'react-dnd';
import { CardType } from '../constants';

const DropArea = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: CardType,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  return (
    <div
      ref={drop}
      style={{ backgroundColor: isOver ? 'red' : 'white' }}
    >
      {canDrop ? 'Release to drop' : 'Drag a box here'}
    </div>
  );
}

export default DropArea;