// Define the number of hours of sleep each day of the week.
const getSleepHours = day => {
  day = day.toLowerCase();
  if (day === 'monday') {
    return 7;
  } else if (day === 'tuesday') {
    return 5.5;
  } else if (day === 'wednesday') {
    return 7;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
    return 5.5;
  } else if (day === 'saturday') {
    return 9;
  } else if (day === 'sunday') {
    return 8;
  } else {
    console.log('Pick a week day.');
  }
}

// Calculate the total weekly sleep hours.
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

// Get the prefered total weekly sleep hours.
const getIdealSleepHours = idealHours => {
  // idealHours = 8;
  return idealHours * 7;
}

// Calculate sleep debt.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7.5);
  if (actualSleepHours === idealSleepHours) {
    console.log('You\'re in perfect harmony this week!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You overslept this week. You slept ' + (actualSleepHours - idealSleepHours) + ' hour(s) more than you were supposed to. Stop wasting your time and get to work!');
  } else {
    console.log('You didn\'t sleep well this week. You slept ' + (idealSleepHours - actualSleepHours) + ' hour(s) less than you should have. Consider resting for a while or taking a nap.')
  }
}


calculateSleepDebt();
