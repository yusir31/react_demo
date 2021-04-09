
import { Table, Tag, Space } from 'antd';

import IndexPage from '../indexPage'

import { useState, useEffect } from "react";


const items = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];



export default function ListPage() {


    const [content, setContent] = useState(items);

    function deleteInfo(name) {

        console.log(name, '2');
        const newValue = content.filter(item => item.name !== name);
        setContent(newValue);

    }


    const columns = [
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
                    <a onClick={() => deleteInfo(record.name)}>Delete</a>
                </Space>
            ),
        },
    ];

    //生命周期函数
    useEffect(() => {
        // console.log("content 变了");
    }, [content]); //[]里面是写监听的 监听变量



    return (


        <div>
            <IndexPage></IndexPage>
            <Table columns={columns} dataSource={content} />
        </div>

    );
}
