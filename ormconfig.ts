module.exports = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "groceries",
  synchronize: true,
  loggin: true,
  entities: ["src/entities/**/*.ts", "src/entities/**/*.js"]
};
