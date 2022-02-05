"@types/node": "^17.0.15",
DATABASE_URL="mysql://root:123456789@localhost:3306/databasename"
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
npx prisma migrate dev