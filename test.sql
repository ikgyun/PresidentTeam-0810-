SELECT * 
from board 
where 

LIMIT ((page-1)*row), row
ORDER BY id desc



page는 페이지네이션 번호.
row는 한 페이지에 출력되는 글의 수. 

type이 all 이면 조건은 없음
type이 hot 이면 조아요 25개 이상 like>=25 

searchType 