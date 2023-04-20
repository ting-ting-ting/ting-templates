import { Typography, cx } from '@mezzanine-ui/react';
import classes from './index.module.scss';

interface GroupManagerItemProps {
  name: string;
  coach: string;
  deducted: boolean;
  length: number;
}

const GroupManagerItem = ({ name, coach, deducted, length }: GroupManagerItemProps) => {
  if (length === 1) {
    return (
      <div
        className={cx(classes.root, classes.big, {
          [classes.deducted as string]: deducted,
        })}
      >
        <Typography variant="h6" className={classes.name}>
          {name}
        </Typography>
        <Typography
          variant="h6"
          className={cx(classes.coach, {
            [classes.deducted as string]: deducted,
          })}
        >
          教練：{coach}
        </Typography>
      </div>
    );
  }

  if (length === 2) {
    return (
      <div
        className={cx(classes.root, {
          [classes.deducted as string]: deducted,
        })}
      >
        <Typography variant="h6" className={classes.name}>
          {name}
        </Typography>
        <Typography
          variant="h6"
          className={cx(classes.coach, {
            [classes.deducted as string]: deducted,
          })}
        >
          教練：{coach}
        </Typography>
      </div>
    );
  }

  if (length === 3) {
    return (
      <div
        className={cx(classes.root, {
          [classes.deducted as string]: deducted,
        })}
      >
        <Typography variant="caption" className={classes.name}>
          {name}
        </Typography>
        <Typography
          variant="caption"
          className={cx(classes.coach, classes.smallCoach, {
            [classes.deducted as string]: deducted,
          })}
        >
          教練：{coach}
        </Typography>
      </div>
    );
  }

  if (length === 4) {
    return (
      <div
        className={cx(classes.root, classes.small, {
          [classes.deducted as string]: deducted,
        })}
      >
        <Typography variant="caption" className={classes.name}>
          {name}
        </Typography>
      </div>
    );
  }

  return (
    <div
      className={cx(classes.root, classes.xSmall, {
        [classes.deducted as string]: deducted,
      })}
    >
      <Typography variant="caption" className={classes.name}>
        {name}
      </Typography>
    </div>
  );
};

export default GroupManagerItem;
