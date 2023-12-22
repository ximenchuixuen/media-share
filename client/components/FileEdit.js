// Copyright 2023 shawn
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import '../css/FileUpload.css';

const FileEditPage = () => {
    const location = useLocation();
    const { editName, EditFileID, EditFileLocator } = location.state || {};
    const userName = sessionStorage.getItem('username');
    const userid = sessionStorage.getItem('userid');

    console.log(editName);
    const [formData, setFormData] = useState({
        username: userName,
        userID: userid,
        filename: editName,
        fileLocator: EditFileLocator,
        file: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // // 创建一个FormData对象，用于存储表单数据
        // const formData = new FormData();
        // formData.append('username', userName);
        // formData.append('userID', userid);
        // formData.append('filename', filename);
        // formData.append('file', file);
        console.log(formData);
        // 发起POST请求
        fetch('http://localhost:3000/api/edit', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'multipart/form-data' 
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log('File uploaded:', data);
          // 清空表单
          setFormData({
            username: '',
            userID: '',
            filename: '',
            fileLocator: '',
            file: null
          });
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
      };

    return (
        <div>
            <header className="header">
                <Link to="/home" className="back-link">Back</Link> 
                <h1>Edit File</h1>
            </header>
            <div className="container">
                <h1>File Edit</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>User ID:</label>
                        <input
                            type="text"
                            name="userID"
                            value={formData.userID}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Filename:</label>
                        <input
                            type="text"
                            name="filename"
                            value={formData.filename}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>FileLocator:</label>
                        <input
                            type="text"
                            name="fileLocator"
                            value={formData.fileLocator}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>File:</label>
                        <input
                            type="file"
                            name="file"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">submit</button>
                </form>
            </div>
        </div>
    );
};

export default FileEditPage;
