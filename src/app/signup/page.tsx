import SignupForm from "@/components/signup-form";

export default function SignupPage() {
  return (
    <section className="flex flex-col gap-12">
      <header className="flex flex-col gap-3">
        <h1 className="text-5xl md:text-6xl font-bold">환영합니다!</h1>
        <p className="text-base md:text-2xl">기본 회원 정보를 등록해주세요.</p>
      </header>

      <SignupForm />
    </section>
  );
}
