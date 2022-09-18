import { useEffect, useState } from "react";
import fetchData from "./api/fetchData";
import SearchWidget from "./components/Search/SearchWidget";

function App() {
  const [data, setData] = useState(null)
  const [fetching, setFetching] = useState(false)

  const dataFetching = () => {
    setFetching(true)
    fetchData().then((res) => {
      setData(res)
      setFetching(false)
    })
  }

  useEffect(() => {
    dataFetching()
  }, [])

  return (
    <div className="App">
      <div className="header">
        <SearchWidget
          id='search'
          data={data}
          disabled={fetching || !data}
          placeholder='Search'
          settingFlag={!!data}
          settings={['term', 'collection', 'product']}
        />
      </div>
    </div>
  );
}

export default App;
