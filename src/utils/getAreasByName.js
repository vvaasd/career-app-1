import { areas } from '@data/areas';

export const getAreasByName = (substr, { idsToShow }) =>
  areas.filter(
    (area) =>
      (substr && area.name.toLowerCase().startsWith(substr.toLowerCase())) ||
      idsToShow.includes(area.id)
  );
