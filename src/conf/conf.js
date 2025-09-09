const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL), // this is the endpoint of the project which is store as the appwrite url
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDbId: String(import.meta.env.VITE_APPWRITE_DB_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
