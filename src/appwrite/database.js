import conf from "../conf/conf"
import {Client,Databases,ID,Query} from "appwrite"

// journal entry : create, delete 
export class DbService{
    client=new Client();
    databases;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases= new Databases(this.client);
    }
    async createEntry({date,title,entry}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteEntryCollectionId,
                ID.unique(),
                {
                    date,
                    title,
                    entry
                }
            )
        }catch(error){
            console.log("Appwrite entry creation error : ",error);

        }
    }
    async deleteEntry(id){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteEntryCollectionId,
                id
            )
            return true;
        }catch(error){
            console.log("Appwrite entry deletion error : ",error.message);
            return false;
        }
    }
    async getEntries(){
        try{
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteEntryCollectionId
            );
            return response 
        }catch(error){
            console.log("Appwrite entry retreival error : ",error.message);
            return [];
        }
    }
}

const dbService =  new DbService();
export default dbService;