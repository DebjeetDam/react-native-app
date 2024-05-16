import { Account, Avatars, Client, ID } from "react-native-appwrite";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.dd.aora",
  projectId: "66463fc8000423508a2d",
  databaseId: "664641b50016c5fdc035",
  userCollectionId: "664641cb0032bd3c72f2",
  videoCollectionId: "664641f1001ee73a3d6a",
  storageId: "66464396001fb3f811d6",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);
    await signIn();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
// Register User
