import { Client,Databases, ID ,Query,Storage} from "appwrite";
import config from "../config/config";

export class Database{

    client = new Client()
    databases;
    bucket;
    constructor(){
        this.client = this.client.setEndpoint(config.appwriteurl).setProject(config.projectid)
        this.databases =  new Databases(this.client)
        this.bucket =  new Storage(this.client)
        
    }
    async results(query=[Query.equal("status","active")]){
        try{
            return await databases.listDocuments(config.databaseid,config.collectionid,query)
        }catch(e){
            return e
        }
    }

    async create_post({title,slug,content,featured_image,status,userId}){
        try{
                return await this.databases.createDocument(config.databaseid,config.collectionid,slug,{title,content,featured_image,status,userId})

        }catch(e){
            return e
        }
    }
    async update_post(slug,{title,content,featured_image,status}){
        try{
            return await this.databases.updateDocument(config.databaseid,config.collectionid,slug,{title,content,featured_image,status})
        } catch(e){
                return e
        }

    }
    async delete_post(slug){
        try{
            return await this.databases.deleteDocument(config.databaseid,config.collectionid,slug)
        }catch (e){
            return e
        }
    }
    async getPost(slug){
        try{
            return await this.databases.getDocument(config.databaseid,config.collectionid,slug)
        } catch(e){
            return e
        }
    }
    async uploadFile(file){
        try{
            return await this.bucket.createFile(config.bucketid,ID.unique(),file)
        } catch(e){
            return e
        }
    }
    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(config.bucketid,fileId)
        }catch(e){
            return e 
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(config.bucketid,fileId)

    }
    
}

const database_acces =  new Database()

export default database_acces