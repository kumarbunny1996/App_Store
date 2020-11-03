const catalyst = require('zcatalyst-sdk-node');
const tableName = "Posts";
const columnTitle = "title";
const columnBody = "body";
const columnRowId = "ROWID";

const handleSinglePost = async(req, res)=>{
    let id = req.query.id;
    let catalystApp = catalyst.initialize(req);
    getPost(catalystApp, id)
     .then(resObj=>{
         res.status(200).send(resObj);
     })
     .catch(err =>{
         res.status(400).send({msg: 'your request has been failed'});
     });
}

const getPost = async(catalystApp, id) =>{
    let selectedObj = await getDataFromCatalystDataStore(catalystApp, id);
    if (selectedObj.length === 0) {
        return new Promise.reject({ msg: 'no data is there' });
    }
    let selectedPost = selectedObj[0].Posts;
    return {
        selectedPost
    }
}

function getDataFromCatalystDataStore(catalystApp, id) {
    return new Promise((resolve, reject) => {
        // Queries the Catalyst Data Store table
        catalystApp.zcql().executeZCQLQuery(`Select ${columnRowId}, ${columnTitle}, ${columnBody} from ${tableName} where ${columnRowId} = ${id}`).then(queryResponse => {
            resolve(queryResponse);
        }).catch(err => {
            reject(err);
        })
    });

}

module.exports = handleSinglePost;