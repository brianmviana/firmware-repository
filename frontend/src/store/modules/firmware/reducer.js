import produce from "immer";

const INITIAL_STATE = {
    firmware : {},
    uploadedFile : {},
    file : "",
    project : "",
    version : "",
    board: "",
    loading : false,
    searchBy : "project",
    searching : ""
};

export default function auth(state = INITIAL_STATE, action){
    return produce(state, draft => {
        switch (action.type){
            case "@firmware/CREATE_FIRMWARE_REQUEST": {
                draft.loading = true;
                break;
            }
            case "@firmware/CREATE_FIRMWARE_SUCCESS": {
                draft.firmware = action.payload.firmware;
                draft.loading = false;
                break;
            }
            case "@firmware/CREATE_FIRMWARE_FAILURE": {
                draft.loading = false;
                break;
            }
            case "@firmware/UPLOADED_FILE": {
                draft.uploadedFile = action.payload;
                draft.file = draft.uploadedFile;
                break;
            }
            case "@firmware/UPDATE_PROJECT": {
                draft.project = action.payload.project;
                break;
            }
            case "@firmware/UPDATE_BOARD": {
                draft.board = action.payload.board;
                break;
            }
            case "@firmware/UPDATE_VERSION": {
                draft.version = action.payload.version;
                break;
            }
            case "@firmware/SEARCH_BY": {
                draft.searchBy = action.payload.searchBy;
                break;
            }
            case "@firmware/SEARCHING": {
                draft.searching = action.payload.searching;
                break;
            }
            default : {
                return state;
            }
        }
    });
}

