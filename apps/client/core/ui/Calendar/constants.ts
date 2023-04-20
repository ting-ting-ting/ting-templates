export enum TimeType {
  Am0 = 'Am0',
  Am1 = 'Am1',
  Am2 = 'Am2',
  Am3 = 'Am3',
  Am4 = 'Am4',
  Am5 = 'Am5',
  Am6 = 'Am6',
  Am7 = 'Am7',
  Am8 = 'Am8',
  Am9 = 'Am9',
  Am10 = 'Am10',
  Am11 = 'Am11',
  Pm12 = 'Pm12',
  Pm13 = 'Pm13',
  Pm14 = 'Pm14',
  Pm15 = 'Pm15',
  Pm16 = 'Pm16',
  Pm17 = 'Pm17',
  Pm18 = 'Pm18',
  Pm19 = 'Pm19',
  Pm20 = 'Pm20',
  Pm21 = 'Pm21',
  Pm22 = 'Pm22',
  Pm23 = 'Pm23',
}

export const timeTypeValue = {
  [TimeType.Am0]: {
    label: '00:00',
    value: 0,
  },
  [TimeType.Am1]: {
    label: '01:00',
    value: 1,
  },
  [TimeType.Am2]: {
    label: '02:00',
    value: 2,
  },
  [TimeType.Am3]: {
    label: '03:00',
    value: 3,
  },
  [TimeType.Am4]: {
    label: '04:00',
    value: 4,
  },
  [TimeType.Am5]: {
    label: '05:00',
    value: 5,
  },
  [TimeType.Am6]: {
    label: '06:00',
    value: 6,
  },
  [TimeType.Am7]: {
    label: '07:00',
    value: 7,
  },
  [TimeType.Am8]: {
    label: '08:00',
    value: 8,
  },
  [TimeType.Am9]: {
    label: '09:00',
    value: 9,
  },
  [TimeType.Am10]: {
    label: '10:00',
    value: 10,
  },
  [TimeType.Am11]: {
    label: '11:00',
    value: 11,
  },
  [TimeType.Pm12]: {
    label: '12:00',
    value: 12,
  },
  [TimeType.Pm13]: {
    label: '13:00',
    value: 13,
  },
  [TimeType.Pm14]: {
    label: '14:00',
    value: 14,
  },
  [TimeType.Pm15]: {
    label: '15:00',
    value: 15,
  },
  [TimeType.Pm16]: {
    label: '16:00',
    value: 16,
  },
  [TimeType.Pm17]: {
    label: '17:00',
    value: 17,
  },
  [TimeType.Pm18]: {
    label: '18:00',
    value: 18,
  },
  [TimeType.Pm19]: {
    label: '19:00',
    value: 19,
  },
  [TimeType.Pm20]: {
    label: '20:00',
    value: 20,
  },
  [TimeType.Pm21]: {
    label: '21:00',
    value: 21,
  },
  [TimeType.Pm22]: {
    label: '22:00',
    value: 22,
  },
  [TimeType.Pm23]: {
    label: '23:00',
    value: 23,
  },
};

export const timeTypeValueData: {
  [key: number]: {
    label: string;
    value: number;
    type: string;
  };
} = Object.keys(timeTypeValue).reduce(
  (prev, curr) => ({
    ...prev,
    [timeTypeValue[curr as TimeType].value]: {
      type: curr,
      ...timeTypeValue[curr as TimeType],
    },
  }),
  {}
);

export const viewTimesArray = [
  TimeType.Am0,
  TimeType.Am1,
  TimeType.Am2,
  TimeType.Am3,
  TimeType.Am4,
  TimeType.Am5,
  TimeType.Am6,
  TimeType.Am7,
  TimeType.Am8,
  TimeType.Am9,
  TimeType.Am10,
  TimeType.Am11,
  TimeType.Pm12,
  TimeType.Pm13,
  TimeType.Pm14,
  TimeType.Pm15,
  TimeType.Pm16,
  TimeType.Pm17,
  TimeType.Pm18,
  TimeType.Pm19,
  TimeType.Pm20,
  TimeType.Pm21,
  TimeType.Pm22,
  TimeType.Pm23,
];

export enum ClassType {
  PersonalOneToOne = 'PersonalOneToOne',
  PersonalOneToMany = 'PersonalOneToMany',
  Consultation = 'Consultation',
  Group = 'Group',
}

export enum StatsType {
  PT = 'PT',
  Gift = 'Gift',
  Group = 'Group',
}

export const statsValues = {
  [StatsType.PT]: 'PT',
  [StatsType.Gift]: '加贈',
  [StatsType.Group]: '團課',
};

export type ClassFragment = {
  from: string;
  to: string;
  name: string;
  coach: string;
  students: string[];
  type: ClassType;
  gift: boolean;
  deducted: boolean;
  expired: boolean;
};
