import {
  Typography,
  Button,
} from '@mezzanine-ui/react';
import classes from './index.module.scss';

interface NavigationItemProps {
  label: string;
}

const NavigationItem: FC<NavigationItemProps> = ({
  label,
}) => {
  return (
    <Button type="button" size="large" className={classes.root}>
      <Typography variant="h5" color="text-primary">{label}</Typography>
    </Button>
  );
}

export default NavigationItem;