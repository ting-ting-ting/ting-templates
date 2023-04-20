import GapLayout from '@core/layout/GapLayout';
import { routes } from '@core/utils/path';
import NavigationItem from './NavigationItem';
import classes from './index.module.scss';

const Sidebar: FC = () => {
  return (
    <div className={classes.root}>
      <GapLayout gap={4}>
        {routes.map(route => (
          <NavigationItem key={route.pathname} label={route.label} pathname={route.pathname} />
        ))}
      </GapLayout>
    </div>
  );
}

export default Sidebar;