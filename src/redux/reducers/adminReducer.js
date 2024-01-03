

//  import { INCREMENT, DECREMENT } from './counter.types';
import {ADMIN_LOGIN, ADMIN_LOGOUT} from '../actions/adminAction'

    const INITIAL_STATE = {

        account: {
            email: '', auth: false
        },
    };

    const adminReducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case ADMIN_LOGIN:

               return {

                 ...state, count: state.count + 1,

               };

            case ADMIN_LOGOUT:

               return {
                  ...state, count: state.count - 1,

               };

             default: return state;

        }

    };

    export default adminReducer;