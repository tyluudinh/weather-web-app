export const isNightTime = (): boolean => {
  const hour = new Date().getHours();
  return hour > 17 || hour < 6;
};
