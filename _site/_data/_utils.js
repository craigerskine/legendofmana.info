module.exports = () => {
  const now = new Date();
  const timeZone = 'CST';
  const buildDate = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    timeZone,
  }).format(now);

  return {
    date: {
      raw: now.toISOString(),
      formatted: `${buildDate}`,
      month: new Intl.DateTimeFormat('en-US', {
        month: '2-digit',
        timeZone,
      }).format(now),
      year: new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        timeZone,
      }).format(now),
    },
  };
};
