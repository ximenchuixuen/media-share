import React, { useState, useEffect } from 'react';
import Header from './Header';
import FileTable from './FileTable';
import axios from 'axios';



function MyFileTable() {
  const [username, setUsername] = useState(sessionStorage.getItem("loadFileSystemUserName"));
  const [user_id, setUser_id] = useState(sessionStorage.getItem("loadFileSystemUserID"));
  const [pageNow, setPageNow] = useState(1);
  const [alldata, setAlldata] = useState([]);
  const [files, setFiles] = useState([]);
  const [totalnum, setTotalnum] = useState(0);
  const [totalpage, setTotalpage] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/api/list')
      .then(response => {
        const data = response.data.result;
        const parsedData = JSON.parse(data);
        setAlldata(parsedData);
        setFiles(parsedData.slice(0, 10));
        setTotalnum(parsedData.length);
        setTotalpage(Math.ceil(parsedData.length / 10));
      })
      .catch(error => {
        // 请求失败执行代码
      });
  }, []);

  const handleDelete = (id) => {
    if (user_id === '' || user_id === null || user_id === undefined) {
      window.location.href = './login.html';
      return;
    }
    axios.post('http://localhost:3000/api/delete', { "Id": id })
      .then(response => {
        const res = response.data;
        if (res.isSuccess === true) {
          alert("delete success");
          window.location.reload();
        }
      })
      .catch(error => {
        // 请求失败执行代码
        alert("invalid username or password");
        return;
      });
  };

  const handleDetails = (id) => {
    if (user_id === '' || user_id === null || user_id === undefined) {
      window.location.href = './login.html';
      return;
    }
    window.location.assign(`http://localhost:8681/detail.html?type=modify&id=${id}`);
  };

  const handleEdit = (id) => {
    if (user_id === '' || user_id === null || user_id === undefined) {
      window.location.href = './login.html';
      return;
    }
    window.location.assign(`http://localhost:8681/editfile.html?type=modify&id=${id}`);
  };

  const handlePrevious = () => {
    if (pageNow === 1) {
      alert("this is the first page!");
      return;
    }
    setPageNow(pageNow - 1);
    setFiles(alldata.slice((pageNow - 2) * 10, (pageNow - 1) * 10));
  };

  const handleNext = () => {
    if (pageNow === totalpage) {
      alert("this is the last page!");
      return;
    }
    setPageNow(pageNow + 1);
    setFiles(alldata.slice(pageNow * 10, (pageNow + 1) * 10));
  };
  const sampleData = [
    {
      userName: 'Alice',
      fileName: 'report.pdf',
      filePath: '/documents/reports/',
      fileLocator: 'EDR34D',
      action: 'Download'
    },
    {
      userName: 'Bob',
      fileName: 'image.png',
      filePath: '/images/',
      fileLocator: 'F56GT8',
      action: 'View'
    },
    {
      userName: 'Charlie',
      fileName: 'presentation.pptx',
      filePath: '/presentations/',
      fileLocator: 'GH67H5',
      action: 'Edit'
    },
    {
      userName: 'Dana',
      fileName: 'music.mp3',
      filePath: '/music/',
      fileLocator: 'IJ88J4',
      action: 'Listen'
    },
    {
      userName: 'Eve',
      fileName: 'video.mp4',
      filePath: '/videos/',
      fileLocator: 'KL99L6',
      action: 'Watch'
    }
    // ... 更多数据
  ];
  
  return (
    <div>
      <Header></Header>
      <FileTable data={sampleData}></FileTable>
    </div>
  );
}

export default MyFileTable;
