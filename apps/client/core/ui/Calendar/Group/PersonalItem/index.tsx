import { Typography, Icon, cx } from '@mezzanine-ui/react';
import { MoreHorizontalIcon } from '@mezzanine-ui/icons';
import { useEllipsis } from '../../utils/useEllipsis';
import classes from './index.module.scss';

interface GroupPersonalItemProps {
  name: string;
  students: string[];
  deducted: boolean;
}

const GroupPersonalItem = ({ name, students, deducted }: GroupPersonalItemProps) => {
  const { containerRef, displayLength } = useEllipsis(students.length);

  return (
    <div
      ref={containerRef}
      className={cx(classes.root, {
        [classes.deducted as string]: deducted,
      })}
    >
      <Typography variant="h6" className={classes.name}>
        {name}
      </Typography>
      {students.slice(0, displayLength).map((student) => (
        <Typography
          key={student}
          variant="h6"
          className={cx(classes.student, {
            [classes.deducted as string]: deducted,
          })}
        >
          {student}
        </Typography>
      ))}
      {displayLength < students.length && (
        <Icon
          icon={MoreHorizontalIcon}
          className={cx(classes.student, {
            [classes.deducted as string]: deducted,
          })}
        />
      )}
    </div>
  );
};

export default GroupPersonalItem;
