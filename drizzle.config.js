export default {
    dialect: 'postgresql',
    schema: './utils/db/schema.ts',
    out: "./drizzle",

    dbCredentials: {
        url: "postgresql://cloudinary_owner:YunAsVfv2Oz0@ep-crimson-hill-a1660sro.ap-southeast-1.aws.neon.tech/PostGen?sslmode=require",
        connectionString: "postgresql://cloudinary_owner:YunAsVfv2Oz0@ep-crimson-hill-a1660sro.ap-southeast-1.aws.neon.tech/PostGen?sslmode=require",
    },
};