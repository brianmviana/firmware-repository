export function createFirmwareRequest(data){
    return {
        type : "@firmware/CREATE_FIRMWARE_REQUEST",
        payload : {data}
    };
}

export function createFirmwareSuccess(firmware){
    return {
        type : "@firmware/CREATE_FIRMWARE_SUCCESS",
        payload : {firmware}
    };
}

export function createFirmwareFailure(){
    return {
        type : "@firmware/CREATE_FIRMWARE_FAILURE"
    };
}

export function uploadedFile(file){
    return {
        type : "@firmware/UPLOADED_FILE",
        payload : {file}
    };
}

export function updateProject(project){
    return {
        type : "@firmware/UPDATE_PROJECT",
        payload : {project}
    };
}

export function updateBoard(board){
    return {
        type : "@firmware/UPDATE_BOARD",
        payload : {board}
    };
}


export function updateVersion(version){
    return {
        type : "@firmware/UPDATE_VERSION",
        payload : {version}
    };
}

export function updateSearchBy(searchBy){
    return {
        type : "@firmware/SEARCH_BY",
        payload : {searchBy}
    };
}

export function updateSearching(searching){
    return {
        type : "@firmware/SEARCHING",
        payload : {searching}
    };
}