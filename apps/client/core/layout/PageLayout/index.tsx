import {
  Typography,
} from '@mezzanine-ui/react';
import TabsLayout from '@core/layout/TabsLayout';
import ContentLayout from '@core/layout/ContentLayout';
import Content from '@core/mock/Content';
import Code from '@core/mock/Code';
import classes from './index.module.scss';

type PageLayoutProps = {
  title: string;
  description: string;
}

const PageLayout: FC<PageLayoutProps> = ({
  title,
  description,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <div className={classes.block}>
          <Typography variant="h1" color="text-primary">
            {title}
          </Typography>
          <Typography variant="body1" color="text-primary" className={classes.description}>
            {description}
          </Typography>
        </div>
      </div>
      <TabsLayout tabs={[{
        id: 'Design Guidelines',
        name: 'Design Guidelines',
        component: <ContentLayout><Content /></ContentLayout>,
      }, {
        id: 'Code & Examples',
        name: 'Code & Examples',
        component: <ContentLayout><Code /></ContentLayout>,
      }]} />
    </div>
  );
}

export default PageLayout;