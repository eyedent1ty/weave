const formatNumber = (num: number) => {
  if (num < 1000) {
    return num.toString();
  } else if (num < 10000) {
    return num.toLocaleString();
  } else if (num < 1000000) {
    if (num < 100000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return Math.round(num / 1000) + 'K';
    }
  } else {
    return (num / 1000000).toFixed(1) + 'M';
  }
};

export { formatNumber };
