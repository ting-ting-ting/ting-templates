import {
  Typography,
} from '@mezzanine-ui/react';
import GapLayout from '@core/layout/GapLayout';
import SubNavigation from './SubNavigation';
import classes from './index.module.scss';

const Sidebar: FC = () => {
  return (
    <div className={classes.root}>
      <GapLayout gap={40}>
        <Typography variant="h5" color="text-primary">Component Overview</Typography>
        <SubNavigation />
        <SubNavigation />
        <SubNavigation />
        <SubNavigation />
      </GapLayout>
    </div>
  );
}

export default Sidebar;