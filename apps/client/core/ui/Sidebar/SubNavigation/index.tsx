import { useState } from 'react';
import {
  Typography,
  Button,
  Icon,
} from '@mezzanine-ui/react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from '@mezzanine-ui/icons';
import GapLayout from '@core/layout/GapLayout';
import classes from './index.module.scss';

const SubNavigation: FC = () => {
  const [opened, setOpened] = useState<boolean>(true);

  return (
    <GapLayout gap={12}>
      <div
        className={classes.nav}
        onClick={() => {
          setOpened(state => !state);
        }}
      >
        <Typography variant="h5" color="text-primary">Navigation</Typography>
        <Icon icon={opened ? ChevronUpIcon : ChevronDownIcon} size={24} />
      </div>
      {opened && (
        <div className={classes.subNavigation}>
          <Button type="button" size="large" className={classes.subNavigationItem}>
            <Typography variant="h5" color="text-primary">Breadcrumb</Typography>
          </Button>
          <Button type="button" size="large" className={classes.subNavigationItem}>
            <Typography variant="h5" color="text-primary">Dropdown</Typography>
          </Button>
        </div>
      )}
    </GapLayout>
  );
}

export default SubNavigation;