module.exports = (sequelize, DataTypes) => sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discountPass: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: 'products',
        timestamps: false
    });
