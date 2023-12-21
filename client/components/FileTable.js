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

import React, { useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import { useNavigate } from 'react-router-dom';
import '../css/FileTable.css'

const FileTable = ({ data }) => {
  const navigate = useNavigate();
  // const handleDelete= () => {
  //   navigate('/delete'); // 使用history.push来跳转到上传页面
  // };
  const handleEdit = () => {
    navigate('/edit'); // 使用history.push来跳转到上传页面
  };
  const handleDetail= () => {
    navigate('/detail'); // 使用history.push来跳转到上传页面
  };
  const columns = useMemo(
    () => [
      {
        Header: 'UserName',
        accessor: 'userName', // accessor is the "key" in the data
      },
      {
        Header: 'FileName',
        accessor: 'fileName',
      },
      {
        Header: 'FilePath',
        accessor: 'filePath',
      },
      {
        Header: 'FileLocator',
        accessor: 'fileLocator',
      },
      {
        Header: 'Action',
        Cell: ({ row }) => (
          <div>
          <button className="detail" onClick={() => handleDetail(row.original)}>
            detail
          </button>
          <button className="edit" onClick={() =>  handleEdit(row.original)}>
            edit
          </button>
          <button className="delete" onClick={() => alert('delete')}>
            delete
          </button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable({ columns, data }, usePagination);
  const handleAddFileClick = () => {
    navigate('/upload'); // 使用history.push来跳转到上传页面
  };
  return (
    <div className="table-container">
      <div className="table-header">
        <h2>File List</h2>
        <button className="add-button" onClick={handleAddFileClick}>
          Add File
        </button>
      </div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </div>
    </div>
  );
};

export default FileTable;
