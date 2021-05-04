import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [repos, setRepos] = useState([{}])

  useEffect(() => {
    async function fetchData() {

      const response = await fetch('https://api.github.com/users/shahzadsk046/repos')
      const data = await response.json();
      console.log(data)
      setRepos(data)
      // fetch('https://api.github.com/users/shahzadsk046/repos')
      //   .then((response) => response.json())
      //   .then((json) => {
      //     setData(json);
      //   });
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Repo Name</th>
            <th>Owner Name</th>
            <th>Description</th>
            <th>Default Branch</th>
            <th>Created At</th>
            <th>Git URL</th>
          </tr>
        </thead>

        {repos.map((repoObj, index) => {
          return (
            <tbody key={index}>

              <tr>
                <td>{index + 1}</td>
                <td>{repoObj.name}</td>
                <td>{repoObj.login}</td>
                <td>{repoObj.description}</td>
                <td>{repoObj.default_branch}</td>
                <td>{repoObj.created_at}</td>
                <td><a target='_blank' href={repoObj.clone_url} rel="noopener noreferrer">{repoObj.clone_url}</a></td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  );
}

export default App;
