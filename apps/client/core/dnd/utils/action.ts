import { DropTargetMonitor } from 'react-dnd';

export function onHoverOrDrop({
  monitor,
  dragIndex,
  hoverIndex,
  targetCurrent,
  onLeft,
  onRight,
} : {
  monitor: DropTargetMonitor<unknown, unknown>;
  dragIndex: number;
  hoverIndex: number;
  targetCurrent: HTMLDivElement | null;
  onLeft: VoidFunction;
  onRight: VoidFunction;
}) {
  if (dragIndex !== hoverIndex && targetCurrent) {
    const hoverBoundingRect = targetCurrent.getBoundingClientRect();
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
    const clientOffset = monitor.getClientOffset();

   if (clientOffset) {
    const hoverClientX = clientOffset.x - hoverBoundingRect.left;

    if (hoverClientX < hoverMiddleX) {
      onLeft();
    } else {
      onRight();
    }
   }
  }
}