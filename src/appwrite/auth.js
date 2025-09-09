import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  //this is the method to creaete the account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method or return the userAccount or any success msg
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //this is the way to create the
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  //logout page
  async logout() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch (error) {
      console.log("Appwrite service:: logout::error", error);
      return false;
    }
  }

  //home page if login or get the onfo that they are login or not
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      //   throw error;
      console.log("Appwrite service :: getCurrentUser:: error", error);
    }
    return null;
  }
}

const authService = new AuthService();

//we are exporting the object of teh class so that any user can directly access with withoout creating its object like authService.accound etc...

export default authService;
