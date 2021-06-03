import moment from 'moment';
export const formatDate = (date) => {
  return moment(date).format('DD/MM/YYYY') === moment().format('DD/MM/YYYY')
    ? 'Hôm nay'
    : moment(date?.split('.')[0]).format('MMM DD, YYYY');
};
