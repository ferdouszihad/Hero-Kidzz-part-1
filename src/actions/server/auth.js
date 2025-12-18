"use server";
import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = payload;
  if (!email || !password) {
    return {
      success: false,
    };
  }
  const isExist = await dbConnect(collections.USERS).findOne({ email });
  if (isExist) {
    return {
      success: false,
    };
  }
  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };

  const result = await dbConnect(collections.USERS).insertOne(newUser);
  return {
    ...result,
    insertedId: result.insertedId?.toString(),
  };
};

export const loginUser = async (payload) => {
  const { email, password, name } = payload;
  if (!email || !password) {
    return null;
  }
  const user = await dbConnect(collections.USERS).findOne({ email });
  if (!user) {
    return null;
  }
  const isMatched = await bcrypt.compare(password, user?.password);
  if (isMatched) {
    return user;
  }
  return null;
};
