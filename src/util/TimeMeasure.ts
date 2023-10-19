export type MeasureTimeCb = () => any | Promise<any>;
export type MeasureTimeReturnType<T = any> = [number, Awaited<T>];

export const measureTime = async <T extends MeasureTimeCb = MeasureTimeCb>(cb: T): Promise<MeasureTimeReturnType<ReturnType<T>>> => {
  const start = Date.now();
  const result = await cb();
  const end = Date.now();
  const time = end - start;

  return [time, result];
}
