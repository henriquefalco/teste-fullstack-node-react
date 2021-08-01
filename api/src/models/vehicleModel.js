module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("Vehicle", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        veiculo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        marca: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ano: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        descricao: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        vendido: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        }
    });

    return Vehicle;
};