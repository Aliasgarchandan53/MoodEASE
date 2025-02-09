import conf from "../conf/conf"
import {Client,Databases,ID,Query} from "appwrite"

export class ResourceDB{
    client = new Client();
    database;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.database= new Databases(this.client);
    }

    async createResource({type,title,link,thumbnail,userid}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteResourceCollectionId,
                ID.unique(),
                {
                    type,
                    title,
                    link,
                    thumbnail,
                    userid
                }
            );
        } catch (error) {
            console.log("Appwrite resource creation eror : ",error);
        }
    }
    async deleteResource(id){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteResourceCollectionId,
                id
            )
            return true;
        } catch (error) {
            console.log("Appwrite resource deletion error : ",error.message);
            return false;
        }
    }
    async getResources(userid,queries=[Query.equal('userid',userid)]){
        try{
            const response = await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteResourceCollectionId,
                queries
            );
            return response 
        }catch(error){
            console.log("Appwrite resource retreival error : ",error.message);
            return [];
        }
    }
}

const resourceDB =  new ResourceDB();
export default resourceDB;