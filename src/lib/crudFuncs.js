import { currentUser, pb} from "./auth";

export default{
    createTask,
    deleteTask,
    getTasks,
    updateTask
}

/**
 * @param {string} taskName
 * @param {string} parentId
 */
async function createTask(taskName, parentId){
    const data = {
        "task_name": taskName,
        "user_id": "RELATION_RECORD_ID",
        "parent_id": parentId
    };

    const record = await pb.collection('Tasks').create(data);
}

/**
 * @param {string} taskId
 */
async function deleteTask(taskId){
    await pb.collection('Tasks').delete(taskId);
}   

/**
 * @param {string} taskId
 * @param {any} params
 */
async function updateTask(taskId,...params){
    const data = {
        "task_name": params.task_name,
        "user_id": currentUser,
        "parent_id": "RELATION_RECORD_ID"
    };
    const record = await pb.collection('Tasks').update(taskId, data);
}

/**
 * @param {string} parentId
 * @param {any} parameters
 * parameters can take a filterString, sortString, expandString, fieldsString, expandString, pageString, perPageString, and requestKeyString.
 * interface to inplement later
 */
async function getTasks(parentId,...parameters){
    const resultList = await pb.collection('Tasks').getFullList(parameters,{
        filter: parameters.filterString,
        sort: parameters.sortString,
        requestKey: parameters.requestKeyString,



    });
}
