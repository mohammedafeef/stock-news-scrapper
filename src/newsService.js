const News = require("./newsModel");
const addNews = async (newsObjs) => {
  await News.insertMany(newsObjs);
};

module.exports = {
  addNews,
};
