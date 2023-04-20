import GapLayout from '@core/layout/GapLayout';
import NavigationItem from './NavigationItem';
import classes from './index.module.scss';

const Sidebar: FC = () => {
  return (
    <div className={classes.root}>
      <GapLayout gap={4}>
        <NavigationItem label="picture wall" />
        <NavigationItem label="calendar" />
      </GapLayout>
    </div>
  );
}

export default Sidebar;