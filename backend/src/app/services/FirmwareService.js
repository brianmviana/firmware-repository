import Firmware from "../models/Firmware";

class FirmwareService {

    async create(data,file) {
        try {
            const {originalname : name, size, key, location : url = ""} = file;
            const {project, board, v_major, v_minor, v_patch} = data;

            if(Number.parseInt(major) && Number.parseInt(minor) && Number.parseInt(patch)){
                return {message: "Version invalid"};
            }

            const version = `v${v_major}_${v_minor}_${v_patch}`;
            const createdFirmware = await Firmware.create({name, path, project, board, version});

            return {firmware: {firmware: createdFirmware}};

        } catch (err) {
            return {message : err};
        }
    }

    async findById(id) {
        try {
            const findFirmware = await Firmware.findById(id)
            if (findFirmware) {
                return {firmware : { firmware: findFirmware}};
            }
        } catch (err) {
            return {message : err};
        }
    }

    async findAll(query) {
        try {
            if(query.project){
                return (await Firmware.findAll({where : {project : query.project}}));
            }

            if(query.board){
                return (await Firmware.findAll({where : {board : query.board}}));
            }

            return (await Firmware.findAll());

        } catch (err) {
            return {message : err};
        }
    }

    async findByProject(project) {
        try {
            const firmwares = await Firmware.findAll({where : {project : project}});
            return firmwares;
        } catch (err) {
            return {message: err};
        }
    }

    async findByBoard(board) {
        try {
            const firmwares = await Firmware.findAll({where : {board : board}});
            return firmwares;
        } catch (err) {
            return {message: err};
        }
    }
}


export default new FirmwareService();