import * as Message from './../constants/Message';
import * as Types from './../constants/ActionType'


const initialState = Message.MSG_WELCOME;

const MessageReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message
        default: return state
    }
};

export default MessageReducer;

