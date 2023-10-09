import moment from "moment";

export const formatDate = (dateStr) => {
  const dt = moment(dateStr).format("LL");
  return dt;
};

export const getData = async (url) => {
  return await fetch(url).then((res) => res.json());
};
