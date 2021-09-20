import { sections } from "../../components/directory/data";

const INITIAL_STATE = {
    sections: sections
}

const directoryReducer = (state = INITIAL_STATE, action) => {

    switch (action.tyoe) {

        default:
            return state
    }
};

export default directoryReducer;