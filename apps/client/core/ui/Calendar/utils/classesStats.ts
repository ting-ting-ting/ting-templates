import dayjs from 'dayjs';
import { ClassType, ClassFragment } from '../constants';

export function getPtLength(classes: ClassFragment[], deducted?: boolean) {
  if (deducted) {
    const length = classes.filter(
      (c) =>
        (c.type === ClassType.PersonalOneToOne || c.type === ClassType.PersonalOneToMany) &&
        !c.gift &&
        dayjs(c.to).valueOf() <= dayjs().valueOf()
    ).length;

    return length;
  }

  const length = classes.filter(
    (c) => (c.type === ClassType.PersonalOneToOne || c.type === ClassType.PersonalOneToMany) && !c.gift
  ).length;

  return length;
}

export function getGiftLength(classes: ClassFragment[], deducted?: boolean) {
  if (deducted) {
    const length = classes.filter(
      (c) =>
        (c.type === ClassType.PersonalOneToOne || c.type === ClassType.PersonalOneToMany) &&
        c.gift &&
        dayjs(c.to).valueOf() <= dayjs().valueOf()
    ).length;

    return length;
  }

  const length = classes.filter(
    (c) => (c.type === ClassType.PersonalOneToOne || c.type === ClassType.PersonalOneToMany) && c.gift
  ).length;

  return length;
}

export function getGroupLength(classes: ClassFragment[], deducted?: boolean) {
  if (deducted) {
    const length = classes.filter(
      (c) => c.type === ClassType.Group && dayjs(c.to).valueOf() <= dayjs().valueOf()
    ).length;

    return length;
  }

  const length = classes.filter((c) => c.type === ClassType.Group).length;

  return length;
}
