"use strict";

module.exports = {
    up : async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            "firmwares", {
                id : {
                    type : Sequelize.INTEGER,
                    allowNull : false,
                    autoIncrement : true,
                    primaryKey : true
                },
                name : {
                    type : Sequelize.STRING,
                    allowNull : false,
                    unique : true
                },
                path : {
                    type : Sequelize.STRING,
                    allowNull : false,
                    unique : true
                },
                project : {
                    type : Sequelize.STRING,
                    allowNull : false
                },
                board : {
                    type : Sequelize.STRING,
                    allowNull : false
                },
                version : {
                    type : Sequelize.STRING,
                    allowNull : false
                },
                created_at : {
                    type : Sequelize.DATE,
                    allowNull : false
                },
                updated_at : {
                    type : Sequelize.DATE,
                    allowNull : false
                }
            }
        );
    },

    down : async (queryInterface) => {
        await queryInterface.dropTable("firmwares");
    }
};
