const catalyst = require('zcatalyst-sdk-node');
const tableName = "Albums";
const handleAddAlbum = async(req,res)=>{
    const catalystApp = catalyst.initialize(req);
    let title = req.body.title;
    addAlbum(catalystApp, title)
        .then(resObj =>{
            res.status(200).send(resObj);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send({ msg: "Your request has been failed" });
        });
}

const addAlbum = async(catalystApp, title) => {
    let albumsVal = title;
    let rowData = {}
    rowData["title"] = albumsVal;
    let rowArr = [];
    rowArr.unshift(rowData);
    let insertedData = await getInsertedData(catalystApp, rowArr);
    if (insertedData) {
        let albumData = {
            ROWID: insertedData[0].ROWID,
            title: insertedData[0].title,
        }
        console.log(albumData);
        return {
            albumData,
            isAdd: true,
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

module.exports = handleAddAlbum;