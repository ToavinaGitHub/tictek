// Live clocks on the home page (Home.jsx, [data-clocks]). The HTML is static,
// so the time and the gap with Madagascar (first clock) are filled in here
// and refreshed every 15 seconds; daylight saving time is handled by Intl.

/** UTC offset of a time zone at a given instant, in minutes. */
function offsetMinutes(timeZone, date) {
  const local = new Date(date.toLocaleString('en-US', { timeZone }));
  const utc = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
  return Math.round((local - utc) / 60000);
}

export function initClocks() {
  const root = document.querySelector('[data-clocks]');
  if (!root) return;

  const { same, unit, versus } = root.dataset;
  const clocks = [...root.querySelectorAll('[data-tz]')].map((el) => ({
    timeZone: el.dataset.tz,
    time: el.querySelector('[data-clock-time]'),
    gap: el.querySelector('[data-clock-gap]'),
    format: new Intl.DateTimeFormat(document.documentElement.lang, {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: el.dataset.tz,
    }),
  }));
  const [home, ...others] = clocks;

  const update = () => {
    const now = new Date();
    for (const clock of clocks) clock.time.textContent = clock.format.format(now);

    const homeOffset = offsetMinutes(home.timeZone, now);
    for (const clock of others) {
      const hours = (offsetMinutes(clock.timeZone, now) - homeOffset) / 60;
      const label = hours === 0 ? same : `${hours > 0 ? '+' : '−'}${Math.abs(hours)} ${unit}`;
      const hint = document.createElement('span');
      hint.className = 'visually-hidden';
      hint.textContent = ` ${versus}`;
      clock.gap.replaceChildren(label, hint);
    }
  };

  update();
  setInterval(update, 15000);
}
