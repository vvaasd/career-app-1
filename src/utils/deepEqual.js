export const deepEqual = (o1, o2) => {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (typeof o1 !== 'object') {
    return o1 === o2;
  }

  if (Array.isArray(o1) || Array.isArray(o2)) {
    if (!Array.isArray(o1) || !Array.isArray(o2)) return false;
    if (o1.length !== o2.length) return false;
    for (let i = 0; i < o1.length; i++) {
      if (!deepEqual(o1[i], o2[i])) return false;
    }
  }

  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for (const [key, value] of Object.entries(o1)) {
    if (!o2.hasOwnProperty(key)) return false;
    if (!deepEqual(value, o2[key])) return false;
  }

  return true;
};
