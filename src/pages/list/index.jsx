
import { Table, Tag, Space } from 'antd';

import IndexPage from '../indexPage'

import { useState, useEffect } from "react";

import { connect } from 'dva';
// const items = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];


function ListPage({ employee, dispatch }) {


    // const [content, setContent] = useState(items);

    function deleteInfo(key) {

        // console.log(name, '2');
        // const newValue = content.filter(item => item.name !== name);
        // setContent(newValue);


        dispatch({
            type: 'employee/deleteEmployeeByKey', //namespace为employee 下面的 方法名为deleteEmployeeByName
            payload: {//参数
                key: key
            },
        })


    }


    const columns = [
        {
            title: 'Key',
            dataIndex: 'key',
            key: 'key',
        },

        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a >Edit</a>
                    <a onClick={() => deleteInfo(record.key)}>Delete</a>
                </Space>
            ),
        },
    ];

    //生命周期函数
    useEffect(() => {
        console.log(employee);
        // dispatch({
        //     type: 'employee/getAll',
        // });
        // console.log("content 变了");
    }, [employee]); //[]里面是写监听的 监听变量

    return (

        <div>
            <IndexPage></IndexPage>
            <Table columns={columns} dataSource={employee} />
        </div>
    );
}
export default connect(({ employee }) => ({ employee }))(ListPage);
