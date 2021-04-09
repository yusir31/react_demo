
import { history } from "umi"
import { useEffect } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';

import IndexPage from '../indexPage'

function EmployeeList({ employee, dispatch }) {


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  };


  const onFinish = (values) => {
    values.key = String(Math.floor(Math.random() * 1000))
    values.tags = ['loser']

    dispatch({
      type: 'employee/addUser', //namespace为employee 下面的 方法名为deleteEmployeeByName
      payload: {//参数
        values
      },
    })
    history.push("/list")

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // componentDidMount
  useEffect(() => {
    // dispatch({
    //   type: 'employee/getAll',
    // });
  }, []);

  return (
    <div>
      <IndexPage></IndexPage>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please input your age!' }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Address'"
          name="address"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <Input />
        </Form.Item>


        {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" >
            Submit
        </Button>
        </Form.Item>
      </Form>
     </div>
  );
}

export default connect(({ employee }) => ({ employee }))(EmployeeList);
