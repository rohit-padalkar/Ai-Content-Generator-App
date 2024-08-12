/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://contentdb_owner:jUmld9t5xoFi@ep-ancient-thunder-a5s5jrab.us-east-2.aws.neon.tech/contentdb?sslmode=require',
  }
};