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

const FileDetailPage = () => {
    const location = useLocation();
    const { name, fileID, FileLocator } = location.state || {};


    const userName = sessionStorage.getItem('username');
    const userid = sessionStorage.getItem('userid');
    const [formData, setFormData] = useState({
        username: userName,
        userID: userid,
        fileid: fileID,
        filename: name,
        file: null,
        fileLocator: FileLocator
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
        // 在这里可以添加上传文件的逻辑
        console.log(formData);
        // 清空表单
        setFormData({
            username: '',
            userID: '',
            filename: '',
            file: null,
        });
    };

    return (
        <div>
            <header className="header">
                <Link to="/home" className="back-link">Back</Link> 
                <h1>File Detail</h1>
            </header>
            <div className="container">
                <h1>File Detail</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label>User ID:</label>
                        <input
                            type="text"
                            name="userID"
                            value={formData.userID}
                            onChange={handleInputChange}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label>Filename:</label>
                        <input
                            type="text"
                            name="filename"
                            value={formData.filename}
                            onChange={handleInputChange}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label>FileID:</label>
                        <input
                            type="text"
                            name="fileid"
                            value={formData.fileid}
                            onChange={handleInputChange}
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label>FileLocator:</label>
                        <input
                            type="text"
                            name="fileLocator"
                            value={formData.fileLocator}
                            onChange={handleInputChange}
                            readOnly
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FileDetailPage;
