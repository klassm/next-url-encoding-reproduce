import { useRouter } from "next/router";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const router = useRouter();

  return <>
    <a onClick={() => router.push("/details/123/details")}>Click me!</a>
  </>
}
