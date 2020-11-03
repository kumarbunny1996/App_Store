const catalyst = require('zcatalyst-sdk-node');
const tableName = "Posts";
const columnTitle = "title";
const columnBody = "body";
const columnRowId = "ROWID";
const columnCreated = "CREATEDTIME";


const handlePosts = async(req,res)=>{
    const catalystApp = catalyst.initialize(req);
    getPosts(catalystApp)
        .then(resObj =>{
            res.status(200).send(resObj);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send({ msg: "Your request has been failed" });
        });
}

const getPosts = async(catalystApp)=>{
    let list = await getDataFromCatalystDataStore(catalystApp);
    if (list.length === 0) {
        return {
            message: "No Posts",
            isThere: true,
        }
    } else {
        let listArr = list.map(item => item.Posts);
        return {
            listArr
        }
    }
}

function getDataFromCatalystDataStore(catalystApp) {
    return new Promise((resolve, reject) => {
        // Queries the Catalyst Data Store table
        catalystApp.zcql().executeZCQLQuery(`Select ${columnRowId}, ${columnTitle}, ${columnBody} from ${tableName} order by createdtime`).then(queryResponse => {
            resolve(queryResponse);
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    });
}

module.exports = handlePosts;