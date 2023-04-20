import dayjs from 'dayjs';
import { Typography } from '@mezzanine-ui/react';
import classes from './index.module.scss';

interface ConsultationItemProps {
  from: string;
  to: string;
  onEdit: VoidFunction;
}

const ConsultationItem = ({ from, to, onEdit }: ConsultationItemProps) => {
  return (
    <div className={classes.root} onClick={onEdit}>
      <div className={classes.titleWrapper}>
        <Typography variant="h6" color="text-primary">
          {dayjs(from).format('hh:mm')}~{dayjs(to).format('hh:mm')}
        </Typography>
      </div>
      <Typography variant="h6" color="text-primary">
        諮詢
      </Typography>
    </div>
  );
};

export default ConsultationItem;
