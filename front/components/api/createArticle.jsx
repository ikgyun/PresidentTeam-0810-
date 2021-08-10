import axios from "axios";

export const createArticle = async (data) => {
  const { userid, subject, body } = data;
  let url = "http://localhost:3002/board/write";
  let options = {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      userid,
      subject,
      content: body,
    }),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};
