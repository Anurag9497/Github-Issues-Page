import React,{useState} from 'react';
import './App.css';
import Search from './components/Search';
import Display from './components/Display';

function App() {
  const [issues, setIssues] = useState(" ");
  const [page, setPage] = useState(" ");
  const [show, setShow] = useState([]);
  const [flag, setFlag] = useState(false);

  return (
    <div className="App">
      <Search setIssues={setIssues} setPage={setPage} setShow={setShow} setFlag={setFlag} />
      <Display issues={issues} page={page} show={show} setShow={setShow} flag={flag} />
    </div>
  );
}

export default App;
