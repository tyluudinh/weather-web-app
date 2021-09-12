import * as React from 'react';

export type NavigationState = {
  goBack: () => void;
  goNext: () => void;
};

export const initialNavigationState: NavigationState = {
  goBack: () => {},
  goNext: () => {},
};
const NavigationContext = React.createContext(initialNavigationState);
export default NavigationContext;
