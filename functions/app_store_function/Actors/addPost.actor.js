const catalyst = require('zcatalyst-sdk-node');
const tableName = "Posts";

const handleAddPost = async(req, res)=>{
    const catalystApp = catalyst.initialize(req);
    let post = req.body;
    addPost(catalystApp, post)
        .then(resObj =>{
            res.status(200).send(resObj);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send({ msg: "Your request has been failed" });
        });
}

const addPost = async(catalystApp, post)=>{
    let title = post.title;
    let body = post.body;
    let rowData = {}
    rowData["title"] = title;
    rowData["body"] = body;
    let rowArr = [];
    rowArr.unshift(rowData);
    let insertedData = await getInsertedData(catalystApp, rowArr);
    if (insertedData) {
        let postData = {
            ROWID: insertedData[0].ROWID,
            title: insertedData[0].title,
            body: insertedData[0].body,
        }
        console.log(postData);
        return {
            postData,
            isAdd:true,
        };
    } else {
        return {
            msg: "failed to add task",
            isAdd: false
        };
    }

}

const getInsertedData = (catalystApp, rowArr) => {
    return new Promise((resolve, reject) => {
        catalystApp.datastore().table(tableName).insertRows(rowArr)
            .then(userInsertResp => {
                //console.log(userInsertResp);
                resolve(userInsertResp);
            }).catch(err => {
                console.log(err);
                reject(err);
            });
    });
}

module.exports = handleAddPost;