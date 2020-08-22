export const DateConvertor = (date) =>
new Date(date).toLocaleDateString('en-US', {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});

export const GetTime = (date) =>
new Date(date).toLocaleTimeString('en-US', {
 
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});

export const GetDate = (date) =>
new Date(date).toLocaleDateString('en-US', {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
 
});


