import { useState } from 'react';
import {
  Typography,
  Icon,
} from '@mezzanine-ui/react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from '@mezzanine-ui/icons';
import GapLayout from '@core/layout/GapLayout';
import NavigationItem from '../NavigationItem';
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
          <NavigationItem label="Item1" pathname="/" />
          <NavigationItem label="Item2" pathname="/" />
        </div>
      )}
    </GapLayout>
  );
}

export default SubNavigation;