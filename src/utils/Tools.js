import moment from 'moment';
export const formatDate = (date) => {
  if (moment(date).format('DD/MM/YYYY-hh:mm') === moment().format('DD/MM/YYYY-hh:mm')) {
    return 'Vừa xong';
  } else if (moment(date).format('DD/MM/YYYY') !== moment().format('DD/MM/YYYY')) {
    return moment(date?.split('.')[0]).format('DD/MM/YYYY');
  } else {
    if (moment(date).format('DD/MM/YYYY-hh') === moment().format('DD/MM/YYYY-hh')) {
      return moment(date?.split('.')[0]).format('hh:mm');
    } else {
      return 'Hôm nay';
    }
  }
};
