import FirmwareService from "../services/FirmwareService";

class FirmwareController {
    async store(req, res){
        const firmware = await FirmwareService.create(req.body, req.file);
        return res.json(firmware);
    }

    async index(req, res){
        return res.json(FirmwareService.findAll());
    }

    async indexById(req, res){
        return res.json(await FirmwareService.findById(req.params.id));
    }

    async indexByProject(req, res){
        return res.json(await FirmwareService.findByProject(req.params.project));
    }

    async indexByBoard(req, res){
        return res.json(await FirmwareService.findByBoard(req.params.board));
    }

    async indexByVersion(req, res){
        return res.json(await FirmwareService.findByVersion(req.params.version));
    }

    async delete(req, res){
        return res.json(await FirmwareService.delete(req.params.id));
    }
}

export default new FirmwareController();