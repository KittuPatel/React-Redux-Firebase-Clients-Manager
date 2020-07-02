import {NOTIFY_USER} from './types'

export const notifyUser = (message,messageType) => {
    return {
        type: NOTIFY_USER,
        message,
        messageType
    }
}
// or 

// export const notifyUser = (message,messageType) => {
//         type: NOTIFY_USER, 
//         message, 
//         messageType
// }
