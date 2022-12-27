const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('videogame', {
        //id: {
        //    // type: DataTypes.UUID,
        //    type: DataTypes.INTEGER,
        //    // defaultValue: DataTypes.UUIDV4,
        //    // allowNull: false,
        //    primaryKey: true
        //},
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            //allowNull: false,
            //defaultValue: "Description is not available"
        },
        released: {
            //type: DataTypes.DATEONLY
            type: DataTypes.STRING,
            defaultValue: null
        },
        rating: {
            //type: DataTypes.INTEGER,    
            type: DataTypes.FLOAT,    
            //defaultValue: null
        },
        platforms: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            //allowNull: false,
            //defaultValue: [""]
        },
        createdByUser: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false 
        },
        img: {
            type: DataTypes.STRING,
            defaultValue: "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
        }
    });
};
