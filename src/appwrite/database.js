import conf from "../conf/conf"
import {Client,Databases,ID,Query} from "appwrite"

export class dbService{
    client=new Client();
    databases;

    constructor(){
        this.client()
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases= new Databases(this.client);
    }
}