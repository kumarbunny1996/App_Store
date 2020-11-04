const catalyst = require("zcatalyst-sdk-node");
const tableName = "Posts";

const handleUpdatePost = async (req, res) => {
  let catalystApp = catalyst.initialize(req);
  let rowId = req.query.id;
  let post = req.body;
  updatePost(catalystApp, rowId, post)
    .then((resObj) => {
      res.status(200).send(resObj);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ msg: "Your request has been failed" });
    });
};

const updatePost = async (catalystApp, rowId, post) => {
  let updatedRowData = {
    ROWID: rowId,
    title: post.title,
    body: post.body,
  };
  console.log(updatedRowData);

  let rowData = await updateDataInDb(catalystApp, updatedRowData);
  if (rowData) {
    return {
      isUpdated: true,
      msg: "Your post has been updated",
    };
  } else {
    return {
      isUpdated: false,
      msg: "Your post update has been failed",
    };
  }
};

const updateDataInDb = (catalystApp, updatedRowData) => {
  return new Promise((resolve, reject) => {
    let datastore = catalystApp.datastore();
    let table = datastore.table(tableName);
    let rowPromise = table.updateRow(updatedRowData);
    rowPromise
      .then((row) => {
        console.log(row);
        resolve(row);
      })
      .catch((err) => reject(err));
  });
};

module.exports = handleUpdatePost;
