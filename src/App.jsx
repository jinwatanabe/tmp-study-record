import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export const App = () => {
  const [content, setContent] = useState("");
  const [time, setTime] = useState(0);
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  const onChangeContent = (event) => setContent(event.target.value);

  const onChangeTime = (event) => setTime(event.target.value);

  const onRegister = () => {
    // 空白の場合は何もしない
    if (!content || !time) {
      setError(true);
      return;
    }
    setError(false);

    setRecords((prev) => [...prev, { title: content, time: parseFloat(time) }]);
    setContent("");
    setTime("");
  };

  useEffect(() => {
    const total = records.reduce(
      (sum, record) => parseInt(sum + record.time),
      0
    );
    setTotalTime(total);
  }, [records]);

  return (
    <>
      <h1>学習記録一覧</h1>
      <div className="list-row">
        <p>学習内容</p>
        <input value={content} onChange={onChangeContent} type="text" />
      </div>
      <div className="list-row">
        <p>学習時間</p>
        <input value={time} onChange={onChangeTime} type="text" />
        <p>時間</p>
      </div>
      <div>
        <p>入力されている学習内容：{content}</p>
        <p>入力されている時間：{time}時間</p>
      </div>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            <p>
              {record.title} {record.time}時間
            </p>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={onRegister}>登録</button>
      </div>
      <div>
        {error ? (
          <p style={{ color: "red" }}>入力されていない項目があります</p>
        ) : (
          ""
        )}
      </div>
      <div>
        <p>合計時間：{totalTime}/ 1000(h)</p>
      </div>
    </>
  );
};

export default App;
