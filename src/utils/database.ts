import mysql from "mysql2/promise";
export default async function main() {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mydb",
  });
}
