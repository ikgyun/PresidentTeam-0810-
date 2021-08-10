import { useRouter } from "next/router";

const View = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {pid}</p>;
};

export default View;
