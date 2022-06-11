// import { ref, get, child, push } from "firebase/database";
// import { database } from "../firebase-config";

// export async function insertOne(collection, data) {
//   await push(ref(database, collection), data);
// }

// export async function getOne(collection, id) {
//   const response = await get(child(ref(database), `${collection}/${id}`));
//   return response.val();
// }

// export async function getAll(collection) {
//   const response = await get(ref(database, collection));
//   const data = response.exportVal();
//   return data;
// }

import axios from "axios";

const baseURL = "https://personal-diary-app-backend.herokuapp.com/api";

export default axios.create({ baseURL });
