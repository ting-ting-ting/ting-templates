import { useMemo, useEffect, useRef, CSSProperties, useCallback } from 'react';
import { cx, Typography } from '@mezzanine-ui/react';
import dayjs from 'dayjs';
import { flatten, isNumber } from 'lodash';
import {
  TimeType,
  timeTypeValue,
  timeTypeValueData,
  ClassType,
  viewTimesArray,
  ClassFragment,
  StatsType,
  statsValues,
} from './constants';
import GroupManagerItem from './Group/ManagerItem';
import CalendarItem from './CalendarItem';
import { getPtLength, getGiftLength, getGroupLength } from './utils/classesStats';
import classes from './index.module.scss';

interface CalendarProps {
  dataSource: {
    title: string;
    classes: ClassFragment[];
  }[];
  isManager?: boolean;
  editable?: boolean;
  onEdit?: (item: ClassFragment) => void;
  targetXIndex?: number | null;
}

const Calendar = ({ dataSource, isManager = false, editable = false, onEdit, targetXIndex }: CalendarProps) => {
  const tableRef = useRef<HTMLDivElement | null>(null);

  const types = useMemo(() => {
    const types: StatsType[] = [];
    const flattenClasses = flatten(dataSource.map((d) => d.classes));

    if (getPtLength(flattenClasses) > 0) {
      types.push(StatsType.PT);
    }

    if (getGiftLength(flattenClasses) > 0) {
      types.push(StatsType.Gift);
    }

    if (getGroupLength(flattenClasses) > 0) {
      types.push(StatsType.Group);
    }

    return types;
  }, [dataSource]);

  const showStats = useCallback((type: StatsType, classes: ClassFragment[]) => {
    switch (type) {
      case StatsType.PT:
        return getPtLength(classes, true);

      case StatsType.Gift:
        return getGiftLength(classes, true);

      case StatsType.Group:
        return getGroupLength(classes, true);

      default:
        return 0;
    }
  }, []);

  useEffect(() => {
    const currentHour = dayjs().startOf('hour').get('hour');
    const target = document.getElementById(timeTypeValueData[currentHour]?.type ?? TimeType.Am0);
    const scrollTop = (target?.offsetTop ?? 0) - (tableRef.current?.offsetTop ?? 0) - 58; // 58 is table header height.

    if (tableRef.current && target) {
      tableRef.current.scrollTop = scrollTop;
    }
  }, []);

  useEffect(() => {
    if (isNumber(targetXIndex) && tableRef.current) {
      tableRef.current.scrollTo({
        left: targetXIndex * 120,
        behavior: 'smooth',
      });
    }
  }, [targetXIndex]);

  return (
    <div className={classes.root} ref={tableRef}>
      <div className={classes.table}>
        <div className={classes.tableHeader}>
          <div className={classes.tableRow}>
            <div className={cx(classes.cell, classes.leftWidth, classes.crossCell)} />
            {dataSource.map((data, index) => (
              <div
                key={data.title}
                className={cx(classes.cell, classes.headerCell, classes.valueCell, {
                  [classes.activeTarget as string]: index === targetXIndex,
                })}
              >
                <Typography
                  variant="h5"
                  className={cx(classes.headerText, {
                    [classes.activeTarget as string]: index === targetXIndex,
                  })}
                >
                  {data.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.tableBody}>
          {viewTimesArray.map((type) => (
            <div key={type} className={classes.tableRow} id={type}>
              <div className={cx(classes.cell, classes.leftCell, classes.leftWidth, classes.bodyHeight)}>
                <Typography variant="h5" color="text-primary">
                  {timeTypeValue[type].label}
                </Typography>
              </div>
              {dataSource.map((data, index) => (
                <div key={index} className={cx(classes.cell, classes.valueCell, classes.bodyHeight)}>
                  {isManager ? (
                    <div className={classes.classesCell}>
                      {data.classes
                        .filter((t) => dayjs(t.from).startOf('hour').get('hour') === timeTypeValue[type].value)
                        ?.map((v, index, array) => {
                          if (v.type === ClassType.Group) {
                            return (
                              <GroupManagerItem
                                key={index}
                                length={array.length}
                                name={v.name}
                                coach={v.coach}
                                deducted={v.deducted}
                              />
                            );
                          }

                          return null;
                        })}
                    </div>
                  ) : (
                    data.classes
                      .filter((t) => dayjs(t.from).startOf('hour').get('hour') === timeTypeValue[type].value)
                      ?.map((v, index) => {
                        const fromMinutes = dayjs(v.from).get('minute');
                        const diffMinutes = dayjs(v.to).diff(dayjs(v.from), 'minute');

                        return (
                          <div
                            key={index}
                            style={{ '--from-minutes': fromMinutes, '--diff-minutes': diffMinutes } as CSSProperties}
                            className={cx(classes.classesCell, classes.personalCell)}
                          >
                            <CalendarItem item={v} editable={editable} onEdit={onEdit} />
                          </div>
                        );
                      })
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={classes.tableFooter}>
          {types.map((type) => (
            <div key={type} className={classes.tableRow}>
              <div className={cx(classes.cell, classes.leftCell, classes.footerCell, classes.leftWidth)}>
                <Typography variant="h5" color="primary-light">
                  {statsValues[type]}
                </Typography>
              </div>
              {dataSource.map((data, index) => (
                <div key={index} className={cx(classes.cell, classes.footerCell, classes.valueCell)}>
                  <Typography variant="h5" color="text-primary">
                    {showStats(type, data.classes)}
                  </Typography>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
