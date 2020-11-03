const catalyst = require('zcatalyst-sdk-node');

const handleDeletePost = async(req, res) => {
    let catalystApp = catalyst.initialize(req);
    let rowId = req.query.id;
    deletePost(catalystApp, rowId)
        .then(resObj => {
            res.status(200).send(resObj);
        })
        .catch(err => {
            res.status(400).send({ msg: "Your request has been failed" });
        });
}

const deletePost = async(catalystApp, rowId) => {
    let row_id = Number(rowId);
    let tableName = "Posts";
    let datastore = catalystApp.datastore();
    let table = datastore.table(tableName);
    let rowPromise = table.deleteRow(row_id);
    rowPromise.then((row) => {
        console.log(row);
    });
    return {
        isDeleted: true,
        msg: "Post was deleted"
    }
}


module.exports = handleDeletePost;
