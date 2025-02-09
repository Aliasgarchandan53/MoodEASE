const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), 
    appwriteEntryCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ENTRY_ID),
    appwriteResourceCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_RESOURCE_ID),
    unsplashApiKey:String(import.meta.env.UNSPLASH_API_KEY)
};

export default conf;
