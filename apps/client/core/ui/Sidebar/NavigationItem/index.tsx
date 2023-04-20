import {
  Typography,
  Button,
} from '@mezzanine-ui/react';
import Link from 'next/link';
import classes from './index.module.scss';

interface NavigationItemProps {
  label: string;
  pathname: string;
}

const NavigationItem: FC<NavigationItemProps> = ({
  label,
  pathname,
}) => {
  return (
    <Button<typeof Link>
      component={Link}
      type="button"
      size="large"
      className={classes.root}
      href={{
        pathname,
      }}
    >
      <Typography variant="h5" color="text-primary">{label}</Typography>
    </Button>
  );
}

export default NavigationItem;