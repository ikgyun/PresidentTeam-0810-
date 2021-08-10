import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showList } from "../../components/api/showList";
import { ShowListAction } from "../../reducers/board";
import { Pageblock } from "../../components/pageblock";

const List = () => {
  const dispatch = useDispatch();
  const { type, search, keyword, rows, page, pageblock, endpage, list } =
    useSelector((state) => state.board);

  let data = { type, search, keyword, rows, page };

  useEffect(async () => {
    const result = await showList(data);
    await dispatch(ShowListAction(result));
  }, []);

  const handlePage = async (num) => {
    const updatePage = { ...data, page: num };
    const result = await showList(updatePage);
    await dispatch(ShowListAction(result));
  };

  const renderList = (list) => {
    return list.map((v) => {
      return (
        <tr key={v.id}>
          <td>{v.id}</td>
          <td>{v.subject}</td>
          <td>{v.nickname}</td>
          <td>{v.createdAt}</td>
          <td>{v.hit}</td>
          <td>{v.like}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div>
        <div>
          <Link href="/board/editor">
            <a>글쓰기</a>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>닉네임</th>
              <th>작성일</th>
              <th>조회수</th>
              <th>추천수</th>
            </tr>
          </thead>
          <tbody>{renderList(list)}</tbody>
        </table>
      </div>
      <Pageblock
        pageblock={pageblock}
        endpage={endpage}
        handlePage={handlePage}
      />
    </>
  );
};

export default List;
