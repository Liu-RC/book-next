"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

export const signInWithCredentials = async (params: Pick<AuthCredentials, "email" | "password">,) => {

}

// 注册
export const SignUp = async (params: AuthCredentials) => {
  const { fullName, email, password, universityId, universityCard } = params;
  //查询数据库
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  //密码加密
  const hashedPassword = await hash(password, 10);
  //插入
  try {
    await db.insert(users).values({
        fullName,
        email,
        universityId,
        password: hashedPassword,
        universityCard,
      });
      await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.log(error, "Signup error");
    return { success: false, error: "Signup error" };
  }
  }
};
