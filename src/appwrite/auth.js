import config from "../config/config";
import { Client,Account,ID } from "appwrite";
export class AuthService{
    client = new Client()
    account;
    constructor(){
        this.client.setEndpoint(config.appwriteurl).setProject(config.projectid)
        this.account = new Account(this.client)
        console.log(this.account)
    }
    async createAccount(email,password,name){

        try{
            const useraccount = await this.account.create(ID.unique(),email,password,name)
            if(useraccount){
                return useraccount
            }else{
                return
            }
        }catch (e){
            throw e
        }


    }
    async login(email,password){
        try{
            return await this.account.createEmailPasswordSession(email,password)

        } catch (error){
            return error 
        }
    }
     async curentUser(){
        try{
            return await this.account.get()
        }catch (error){
            throw error;
        }
        return null;
    }
     
    async logoutSession(){
        try{
            return await this.account.deleteSessions()
        }catch(error){
            return error
        }
    }
}

const authService = new AuthService()

export default authService