import api from "./api";

export const getAllAdvice = async () => {
  try {
    const allAdvice = await api.get("/advice");
    return allAdvice;
  } catch (error) {
    console.log(error);
  }
};

export const addAdvice = async (advice) => {
  try {
    const newAdvice = await api.post("/advice", advice);
    return newAdvice;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdvice = async (id) => {
  try {
    const deletedAdvice = await api.delete("/advice/" + id);
    return deletedAdvice;
  } catch (error) {
    console.log(error);
  }
};

export const getRandomAdvice = async () => {
  try {
    const randomAdvice = await api.get("/advice/random");
    return randomAdvice;
  } catch (error) {
    console.log("fail from api");
  }
};
