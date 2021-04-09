import request from 'umi-request';

export default {
  namespace: 'employee',

  state: [
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
  ],


  //同步
  reducers: {
    // update(_, { payload }) {
    //   const { employees } = payload;
    //   return employees;
    // },

    deleteEmployeeByName(state, { payload }) {
      const { name: name } = payload;

      return state.filter((e) => e.name !== name);
    },
  },

  //异步
  effects: {

    //接口写法
    *getAll(_, { call, put }) {
      const response = yield call(request.get, '/api/employees');

      //回调函数
      yield put({
        type: 'update',
        payload: {
          employees: response,
        },
      });
    },
    *deleteByName(name, { call, put }) {
      const response = yield call(request.get, '/api/employee/deleteByName',name);

      yield put({
        type: 'delete',
        payload: {
          employees: response,
        },
      });
    },
  },
};
