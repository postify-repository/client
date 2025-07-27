export const SIGNUP_FORM_FIELDS = [
  {
    name: "username" as const,
    label: "프로필 이름",
    placeholder: "프로필 이름을 입력하세요.",
    type: "text" as const,
  },
  {
    name: "password" as const,
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요.",
    type: "password" as const,
  },
  {
    name: "nickname" as const,
    label: "닉네임",
    placeholder: "닉네임을 입력하세요.",
    type: "text" as const,
  },
  {
    name: "bio" as const,
    label: "한 줄 소개",
    placeholder: "당신을 한 줄로 소개해보세요.",
    type: "text" as const,
  },
] as const;
