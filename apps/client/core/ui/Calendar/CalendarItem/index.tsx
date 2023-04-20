import { useCallback, useMemo } from 'react';
import { cx } from '@mezzanine-ui/react';
import PersonalItem from '../Personal/Item';
import ConsultationItem from '../Consultation/Item';
import GroupPersonalItem from '../Group/PersonalItem';
import { ClassType, ClassFragment } from '../constants';
import DeleteButton from '../DeleteButton';
import classes from './index.module.scss';

interface CalendarItemProps {
  item: ClassFragment;
  editable: boolean;
  onEdit?: (item: ClassFragment) => void;
}

const CalendarItem = ({ item, editable, onEdit: onEditProps }: CalendarItemProps) => {
  const onEdit = useCallback(() => {
    if (editable && onEditProps) {
      onEditProps(item);
    }
  }, [item, editable, onEditProps]);

  const comp = useMemo(() => {
    if (item.type === ClassType.PersonalOneToOne || item.type === ClassType.PersonalOneToMany) {
      return (
        <PersonalItem
          from={item.from}
          to={item.to}
          students={item.students}
          deducted={item.deducted}
          expired={item.expired}
          isGift={item.gift}
          onEdit={onEdit}
        />
      );
    }

    if (item.type === ClassType.Consultation) {
      return <ConsultationItem from={item.from} to={item.to} onEdit={onEdit} />;
    }

    if (item.type === ClassType.Group) {
      return <GroupPersonalItem name={item.name} students={item.students} deducted={item.deducted} />;
    }

    return null;
  }, [item, onEdit]);

  const deleteBtn = useMemo(() => {
    if (editable) {
      if (
        (item.type === ClassType.PersonalOneToOne || item.type === ClassType.PersonalOneToMany) &&
        !item.deducted &&
        !item.expired
      ) {
        return <DeleteButton item={item} />;
      }

      if (item.type === ClassType.Consultation) {
        return <DeleteButton item={item} />;
      }

      return null;
    }

    return null;
  }, [editable, item]);

  return (
    <div
      className={cx(classes.root, {
        [classes.editable as string]: editable && item.type !== ClassType.Group,
      })}
    >
      {comp}
      {deleteBtn}
    </div>
  );
};

export default CalendarItem;
