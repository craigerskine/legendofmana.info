module.exports = () => {
  const now = new Date();
  const timeZone = 'CST';
  const buildTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone,
  }).format(now);

  return {
    time: {
      raw: now.toISOString(),
      formatted: `${buildTime}`,
    },
  };
};