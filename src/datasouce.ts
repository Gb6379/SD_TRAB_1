import { DataSource } from 'typeorm/data-source';

export const dataSource = new DataSource({
  type: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
