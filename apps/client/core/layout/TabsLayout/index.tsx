import { useState, useEffect, useMemo, ReactNode, memo } from 'react';
import { useRouter } from 'next/router';
import {
  Tabs,
  TabPane,
  Tab,
} from '@mezzanine-ui/react';
import { usePreviousValue } from '@core/hooks/usePreviousValue';
import { stringify } from 'qs';

interface TabsLayoutProps<T> {
  tabs: {
    id: T;
    name: string;
    component: ReactNode;
  }[];
}

const TabsLayout = <T extends string>({
  tabs = [],
}: TabsLayoutProps<T>) => {
  const {
    pathname,
    query,
    push,
  } = useRouter();

  const tabQs = useMemo(() => (query.tab as string) ?? undefined, [query.tab]);
  const [tabId, setTabId] = useState<string>(tabQs ?? tabs[0].id);
  const prevTabId = usePreviousValue(tabId);
  const prevTabQs = usePreviousValue(tabQs);

  useEffect(() => {
    if (prevTabId !== tabId && tabId !== tabQs) {
      push({
        pathname: pathname,
        search: stringify({
          tab: tabId,
        }),
      });
    }
  }, [pathname, tabId, prevTabId, tabQs, push]);

  useEffect(() => {
    if (tabQs !== prevTabQs && tabId !== tabQs) {
      if (tabQs) {
        setTabId(tabQs as T);
      } else {
        setTabId(tabs[0].id)
      }
    }
  }, [tabQs, prevTabQs, tabId, tabs]);

  return (
    <Tabs
      activeKey={tabId}
      onChange={(key) => setTabId(key as T)}
    >
      {tabs.map(tab => (
        <TabPane
          key={tab.id}
          tab={(
            <Tab>{tab.name}</Tab>
          )}
        >
          {tab.component}
        </TabPane>
      ))}
    </Tabs>
  );
}

export default memo(TabsLayout);