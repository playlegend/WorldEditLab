import {
  DataTypes, Model, Sequelize,
} from 'sequelize';
import { Access } from './access';

interface SchematicAttributes {
  uuid: string;
  name: string;
  uploadedBy: number;
  access: Access;
  rawData: string;
}

export class Schematic extends Model<SchematicAttributes> implements SchematicAttributes {
  public uuid!: string;

  public name!: string;

  public uploadedBy!: number;

  public access!: Access;

  public rawData!: string;
}

export const initSchematic = async (sequelize: Sequelize) => {
  Schematic.init({
    uuid: {
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(32),
    },
    uploadedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1,
    },
    access: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: Access.INTERNAL,
    },
    rawData: {
      type: DataTypes.BLOB,
    },
  }, {
    sequelize,
    modelName: 'Schematic',
    tableName: 'schematic',
  });
};
