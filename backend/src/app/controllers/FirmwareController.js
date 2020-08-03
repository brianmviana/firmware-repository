import Firmware from "../models/Firmware";
import FirmwareService  from "../services/FirmwareService";

class FirmwareController {

    async index(req, res){
        const firmwares = await FirmwareService.findAll(req.query);
        return res.json(firmwares);
    }

    async store(req, res){
        const firmware = await FirmwareService.create(req.body, req.file);
        return res.json(firmware);
    }

}

export default new FirmwareController();