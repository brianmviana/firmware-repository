import Sequelize, { Model } from "sequelize";

class Firmware extends Model {
    static init(sequelize){
        super.init(
            {
                name : Sequelize.STRING,
                path : Sequelize.STRING,
                url : {
                    type : Sequelize.VIRTUAL,
                    get(){
                        return `http://localhost:3333/files/${this.path}`;
                    }
                },
                project : Sequelize.STRING,
                board : Sequelize.STRING,
                version : Sequelize.STRING

            },
            {
                sequelize
            }
        );
        return this;
    }
}

export default Firmware;