import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useAxios } from "./useAxios";

export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(`Loading:${loading}\nData:${data}\nError:${error}`);

  return (
    <div className="App">
      <button onClick={refetch}>Notification</button>
    </div>
  );
}
