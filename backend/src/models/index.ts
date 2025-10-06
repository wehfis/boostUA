import sequelize from '../config/database';
import User from './User';

// Initialize models
const models = {
  User,
};

// Setup associations if any
Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});

export { sequelize };
export default models;
