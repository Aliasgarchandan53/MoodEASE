import {Client,Account,ID} from "appwrite";
import conf from "../conf/conf"
export class AuthService{
    
    client =  new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account= new Account(this.client);
        console.log("Account created:",this.account);
    }
    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(
                ID.unique(),email,password,name
            )
            if(userAccount){
                //call another method
                return this.login({email,password});
            }else{
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try{
            const session = this.account.createEmailPasswordSession(email,password);
            return session;
        }catch(error){
            throw error;
        }
    }
    async getCurrentUser(){
        try{
            const userSession= this.account.get();
            if(userSession){
                console.log("found session :\n",userSession)
                return userSession
            }else{
                return null;
            }
        }catch(error){
            console.log("Appwrite service error : ",error);
        }
        return null;
    }
    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log("Appwrite logout error :: ",error);
        }
    }
}

const authService = new AuthService();
export default authService;