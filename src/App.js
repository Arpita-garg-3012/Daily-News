import React, { useState } from 'react';
import Search from './components/Search';
import NewsItems from './components/NewsItems';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [category, setCategory] = useState("general");
  const [progress, setProgress] = useState(10);

  const handleSearch = (category) => {
    setCategory(category);
  };

  return (
    <>
      <Search onSearch={handleSearch} setProgress={setProgress} />
      <NewsItems category={category} setProgress={setProgress} />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
    </>
  );
}

export default App;
