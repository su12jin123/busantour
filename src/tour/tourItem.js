/*  정보입력 */
const TourItem = ({article}) => {
    const {MAIN_TITLE,/* 콘텐츠명 */
         TITLE, /* 제목 */
         GUGUN_NM, /* 구군 */
         HOMEPAGE_URL, /* 홈페이지 */
         MAIN_IMG_NORMAL, /* 이미지url */
         ADDR1,
         ITEMCNTNTS
        } = article;
    return(
        <div className="item">
            <div className="title">
                {/* <span>{GUGUN_NM}</span> */}
                <strong>{MAIN_TITLE}</strong>
                <h4>{TITLE}</h4>
            </div> {/* title end */}  
            <img src={MAIN_IMG_NORMAL} alt={TITLE} />
                <div className="bottom">
                <p>{ADDR1}</p>
            {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">바로가기</a>}
            {/* 홈페이지 있으면 나타나고 없으면 나타나지 않음 */}</div>
            {/* noreferrer : 해당 페이지로 넘어가기 위해 http에게 요청함 */}

            <span>{ITEMCNTNTS}</span> 
           
        </div> /* item end */
    )
}

export default TourItem;