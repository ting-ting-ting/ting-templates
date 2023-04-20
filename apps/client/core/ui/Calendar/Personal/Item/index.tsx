import dayjs from 'dayjs';
import { Typography, Icon, cx } from '@mezzanine-ui/react';
import { MoreHorizontalIcon } from '@mezzanine-ui/icons';
import { useEllipsis } from '../../utils/useEllipsis';
import classes from './index.module.scss';

interface PersonalItemProps {
  from: string;
  to: string;
  students: string[];
  deducted: boolean;
  expired: boolean;
  isGift: boolean;
  onEdit: VoidFunction;
}

const PersonalItem = ({ from, to, students, deducted, expired, isGift, onEdit }: PersonalItemProps) => {
  const { containerRef, displayLength } = useEllipsis(students.length);

  return (
    <div
      ref={containerRef}
      className={cx(classes.root, {
        [classes.isGift as string]: isGift,
        [classes.deducted as string]: deducted,
        [classes.expired as string]: expired,
      })}
      onClick={onEdit}
    >
      <div className={classes.titleWrapper}>
        <Typography
          variant="h6"
          className={cx(classes.time, {
            [classes.isGift as string]: isGift,
            [classes.expired as string]: expired,
          })}
        >
          {dayjs(from).format('hh:mm')}~{dayjs(to).format('hh:mm')}
        </Typography>
      </div>

      {students.slice(0, displayLength).map((student) => (
        <Typography
          key={student}
          variant="h6"
          className={cx(classes.student, {
            [classes.isGift as string]: isGift,
            [classes.deducted as string]: deducted,
            [classes.expired as string]: expired,
          })}
        >
          {student}
        </Typography>
      ))}
      {displayLength < students.length && (
        <Icon
          icon={MoreHorizontalIcon}
          className={cx(classes.student, classes.icon, {
            [classes.isGift as string]: isGift,
            [classes.deducted as string]: deducted,
            [classes.expired as string]: expired,
          })}
        />
      )}
    </div>
  );
};

export default PersonalItem;
