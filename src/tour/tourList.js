

import axios from "axios";
import TourItem from "./tourItem";
import { useState, useEffect } from "react";
const TourList = () => {
    const key = "wZeUZ%2FgZ5NhsFo0K8jkOXzFSj7EGpzIcpkyrin3fjDAj3G1Zx87yjwq8UvfcP2rM%2B9tHF%2FOYfERVHUZXWpz2gw%3D%3D"
    const [tour, setTour] = useState([]);
    useEffect (() => {
        const tourData = async () => {
            try {
                const response = await axios.get(`https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${key}&numOfRows=50&pageNo=1&resultType=json`)
                setTour(response.data.getAttractionKr.item)
            } catch(error){
                console.log(error)
            }
        };
        tourData();
    }, [])


    return(
    <div className="list">
       <p className="top">TOP</p>
        <div className="main_list">
        {tour.map((tourMap) => (
        <TourItem article={tourMap}/>
        ))}
        </div> {/* main_list end */}
    </div> /* list end */
)
}
export default TourList;
