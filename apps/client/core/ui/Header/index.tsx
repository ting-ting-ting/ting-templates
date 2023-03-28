import {
  AppBar,
  AppBarBrand,
  AppBarMain,
  AppBarSupport,
  Navigation,
  NavigationItem,
} from '@mezzanine-ui/react';
import Image from 'next/image';
import logo from '@public/images/mezzanine.svg';

const Header: FC = () => {
  return (
    <AppBar>
      <AppBarBrand>
        <Image src={logo} alt="" />
      </AppBarBrand>
      <AppBarMain>
        <Navigation>
          <NavigationItem
            key="Foundation"
          >
            Foundation
          </NavigationItem>
          <NavigationItem
            key="Components"
            active
          >
            Components
          </NavigationItem>
          <NavigationItem
            key="Resources"
          >
            Resources
          </NavigationItem>
        </Navigation>
      </AppBarMain>
      <AppBarSupport>
        Search
      </AppBarSupport>
    </AppBar>
  );
}

export default Header;