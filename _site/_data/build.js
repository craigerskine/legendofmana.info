module.exports = () => {
  const now = new Date();
  const timeZone = 'CST';
  const buildDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'short',
    timeZone,
  }).format(now);
  const buildTime = new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short',
    timeZone,
  }).format(now);

  return {
    time: {
      raw: now.toISOString(),
      formatted: `${buildDate} @${buildTime}`,
    },
  };
};