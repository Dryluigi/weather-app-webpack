import moment from "moment";

const updateHeaderInfo = (city, country) => {
  const headerInfo = document.querySelector('header-info');
  const todayDate = moment().format('dddd, DD MMMM YYYY');
  headerInfo.setAttribute('city', city);
  headerInfo.setAttribute('country', country);
  headerInfo.setAttribute('date', todayDate);

};

export default updateHeaderInfo;