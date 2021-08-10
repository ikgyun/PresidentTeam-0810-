import Head from "next/head";
import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import QuillEditor from "../../components/QuillEditor";
import Styled from "styled-components";
import { createArticle } from "../../components/api/createArticle";
import { useCookies } from "react-cookie";
import cookie from "react-cookies";

const StyledContainer = Styled.div`

 min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = Styled.h1`
margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

export default function Home() {
  const [body, setBody] = useState(""); // Quill 에디터의 innerHTML을 담는 state
  const [userid, setUserid] = useState();
  useEffect(() => {
    setUserid(cookie.loadAll());
  }, []);

  const subject = useInput("");
  /* 외부에서 body의 수정이 일어난 경우 body에 자동으로 적용되지 않습니다!
     이 함수를 호출했을 때 컴포넌트 내의 useEffect가 실행되어 body의 수정 사항이 적용됩니다.*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userid);
    const data = {
      userid,
      subject: subject.value,
      body: body,
    };
    console.log(data);

    const result = await createArticle(data);
    console.log(result);
    // await dispatch(UserLoginAction(result));
    setBody("");
  };

  return (
    <StyledContainer>
      <Head>
        {/* 관련된 리소스 로드 */}
        <link rel="stylesheet" src="../../style/style.css" />
        <link
          href="//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css"
          rel="stylesheet"
        />
        <script src="//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.js"></script>
        <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/highlight.min.js"></script>
        <script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/styles/default.min.css"
        />
        <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css" />
      </Head>

      <StyledTitle>글쓰기</StyledTitle>

      <div style={{ width: "80%", marginTop: "40px" }}>
        <div>
          제목:
          <input type="text" {...subject} placeholder="제목을 입력해주세요" />
        </div>
        <QuillEditor body={body} handleQuillChange={setBody} />
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <button size="large" type="submit" className="">
            작성
          </button>
        </div>
      </form>
    </StyledContainer>
  );
}
