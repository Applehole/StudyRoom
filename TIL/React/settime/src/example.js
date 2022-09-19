import react, { useEffect, useState } from "react";
import axios from "axios";
{
  console.log(1);
}

function Example() {
  const [currentPage, setCurrentPage] = useState(0);
  const [firstDate, setFirstDate] = useState([]);
  const [secondDate, setSecondDate] = useState([]);

  console.log(2);
  useEffect(() => {
    const userApiOrder = () => {
      setTimeout(async function () {
        await axios
          .get(
            `https://mycroft-test-api.herokuapp.com/order?page=${currentPage}`
          )
          .then((res) => {
            console.log("first", res.data.content);
            setFirstDate(res.data.content);
          });
      }, 1000);
    };
    userApiOrder();
  }, [currentPage]);

  useEffect(() => {
    axios
      .get(`https://mycroft-test-api.herokuapp.com/order?page=${currentPage}`)
      .then((res) => {
        console.log("second", res.data.content);
        setSecondDate(res.data.content);
      });
  }, [currentPage]);

  return (
    <div className="App">
      {console.log(3)}
      {firstDate.map((el) => {
        return <div> first {el.itemName}</div>;
      })}
      {secondDate.map((el) => {
        return <div> second {el.itemName}</div>;
      })}
    </div>
  );
}

export default Example;
