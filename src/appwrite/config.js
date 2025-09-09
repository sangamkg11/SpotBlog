// Appwrite databases ,file upload and custom queries
//take the reference from the appwrite doccument site
import conf from "../conf/conf";
import {
  Client,
  ID,
  Databases,
  Query,
  Storage,
  Permission,
  Role,
} from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //method for the creating the post means any one can create the post and that will
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost error", error);
    }
  }

  //method to update the poost and make the change and updation in the post as well as in the db also

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost error", error);
    }
  }

  //methos fot the deletion of the post fromt he db also
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost error", error);
      return false;
    }
  }

  //to fetch the single dtata or post from the db
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost error", error);
    }
  }

  //how to implemeent the querie like to get the poost which are active or inactive based on condition ,here we fetch all

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDbId,
        conf.appwriteCollectionId,
        queries
        // 100, // no. of pages appeared on the page
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts error", error);
      return false;
    }
  }

  //file uplaod service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
        [Permission.read(Role.any())]
      );
    } catch (error) {
      console.log("Appwrite service ::uplaodFile  error", error);
      return false;
    }
  }

  //serice to delete the file
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePosts error", error);
      return false;
    }
  }

  //method to get the file preview ,here we dont use the asyn bcsz it dont use the promise and so on it also fetch and return process is too much fast
  getFileView(fileId) {
    return this.bucket.getFileView(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
