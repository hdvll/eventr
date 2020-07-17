export const formatPrice = (total) => {
  if (total.toString().length > 3) {
    let first = total.toString().substring(0, 1);
    let rest = total.toString().substring(1, total.length);
    return first + " " + rest;
  } else return total;
};
