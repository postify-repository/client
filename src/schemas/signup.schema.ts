import { z } from "zod";

export const SignupFormSchema = z.object({
  username: z.string().min(1, { message: "이름을 입력해주세요." }),
  email: z.email({ message: "이메일 형식에 맞지 않습니다." }),
  password: z.string().min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
  nickname: z.string().min(1, { message: "닉네임을 입력해주세요." }),
  bio: z.string().nullable(),
});

export type SignupFormData = z.infer<typeof SignupFormSchema>;
