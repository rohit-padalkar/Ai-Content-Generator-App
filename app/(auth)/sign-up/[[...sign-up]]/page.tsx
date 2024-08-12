import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center p-20 bg-slate-100">
      <SignUp />
    </div>
  );
}
