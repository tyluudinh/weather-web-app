export const handlePageNavigationTransitions = (pathName: string) => {
  return {
    initial: { opacity: 1 },
    from: () => {
      return pathName !== '/'
        ? { opacity: 1, transform: 'translate3d(100%,0,0)' }
        : { opacity: 0, transform: 'translate3d(-80%,0,0)' };
    },
    enter: () => ({ opacity: 1, transform: 'translate3d(0%,0,0)' }),
    leave: () => {
      return pathName !== '/'
        ? { opacity: 0, transform: 'translate3d(-40%,0,0)' }
        : { opacity: 0, transform: 'translate3d(120%,0,0)' };
    },
    unique: true,
  };
};
