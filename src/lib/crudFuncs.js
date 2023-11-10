import { t } from "vitest/dist/types-198fd1d9";
import { pb, currentUser} from "./auth";

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
 * @param {any[]} params
 */
function updateTask(taskId,...params){
    const data = {
        "task_name": params[],
        "user_id": "RELATION_RECORD_ID",
        "parent_id": "RELATION_RECORD_ID"
    };
    const record = await pb.collection('Tasks').update(taskId, data);
}

/**
 * @param {string} parentId
 * @param {any[]} parameters
 */
function getTasks(parentId,...parameters){
    return;
}

