import { GenerateNextPath as NextPath } from './generateNextPath';

export function nextJsDynamicPath<T extends string>(nextPath: T, param: string) {
  return nextPath.replace(/\[\S+\]/, param);
}

export function getNextJsDynamicPathParamName<T extends string>(nextPath: T) {
  return nextPath.match(/\[(.+?)\]$/)?.[1];
}

export { GenerateNextPath as NextPath } from './generateNextPath';

export const dynamicPath = nextJsDynamicPath<NextPath>;
export const getPathParamName = getNextJsDynamicPathParamName<NextPath>;

export const routes = [{
  label: '行事曆',
  pathname: NextPath.CALENDAR,
}, {
  label: '卡片',
  pathname: NextPath.CARDS,
}];
