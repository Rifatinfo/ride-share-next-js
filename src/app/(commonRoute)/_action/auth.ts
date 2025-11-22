/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function loginAction(preState: any, fromData: any) {
  
    const email = fromData.get("email");
    const password = fromData.get("password");

    console.log(email, password);
    return null;
  }