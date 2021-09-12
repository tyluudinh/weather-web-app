import { Place } from 'types';

export const getCurrentLocation = (): Promise<Place | null> => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      () => {
        resolve(null);
      },
    );
  });
};
