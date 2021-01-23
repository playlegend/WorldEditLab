import { DataTypes, Model, Sequelize } from 'sequelize';
import { Role } from './role';
import { hashPassword } from '../auth/password';

interface UserAttributes {
  id?: number;
  name: string;
  password: string;
  role: Role;
  forcePasswordUpdate: boolean;
}

export class User extends Model implements UserAttributes {
  public id!: number;

  public name!: string;

  public password!: string;

  public role!: Role;

  public forcePasswordUpdate!: boolean;
}

export const initUser = async (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(60),
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: Role.GUEST,
    },
    forcePasswordUpdate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
  });

  try {
    const count = await User.count({});
    if (count === 0) {
      // Create default user
      await User.create({
        name: 'admin',
        password: hashPassword('admin'),
        role: Role.ADMIN,
        forcePasswordUpdate: true,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
