import moment from 'moment'

export const formatPostingDate = (date) => {
    const formatDate = date ? moment(date) : null;

    let displayDate;

  if (formatDate) {
    const today = moment();
    
    if (formatDate.isSame(today, 'day')) {
      // If the date is today, show the time
      displayDate = `${formatDate.format('h:mm a')}, Today`;
    } else if (formatDate.isSame(today.subtract(1, 'days'), 'day')) {
      // If the date is yesterday, show "Yesterday"
      displayDate = 'Yesterday';
    } else {
      // For all other dates, show the full date
      displayDate = formatDate.format('MMMM Do YYYY');
    }
  } else {
    displayDate = '';
  }

  return displayDate
}