import Firmware from "../models/Firmware";
import utils from "../utils/utils";

class FirmwareService {
    async create(data, file){
        const {project, board, version} = data;
        const {originalname : name, size, key, location : url = ""} = file;

        // const firmwareExists = await Firmware.findAll();

        // if (firmwareExists != null) {
        //     return {error : "Firmware already exists!"};
        // }
        // if (name != null && !utils.validate({project, board, version, name, size, key, url})) {
        //     return {error : "Firmware invalid"};
        // }

        const firmware = await Firmware.create({project, board, version, name, size, key, url});
        return firmware;
    }

    async findAll(){
        const firmwares = await Firmware.find();
        return firmwares;
    }

    async findById(id){
        const firmware = await Firmware.findByPk(id);
        return firmware;
    }

    async findByProject(project){
        const firmware = await Firmware.findAll({where : {project}});
        return firmware;
    }

    async findByBoard(board){
        const firmware = await Firmware.findAll({where : {board}});
        return firmware;
    }

    async findByVersion(version){
        const firmware = await Firmware.findAll({where : {version}});
        return firmware;
    }

    async delete(id){
        const firmware = await Firmware.findById(id);
        await firmware.remove();
        return ({sucess: true});
    }

}

export default new FirmwareService();