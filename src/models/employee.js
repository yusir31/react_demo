import request from 'umi-request';

export default {
  namespace: 'employee',

  state: [],

  reducers: {
    update(_, { payload }) {
      const { employees } = payload;
      return employees;
    },

    deleteEmployee(state, { payload }) {
      const { id: targetId } = payload;

      return state.filter((e) => e.id !== targetId);
    },
  },

  effects: {
    *getAll(_, { call, put }) {
      const response = yield call(request.get, '/api/employees');

      yield put({
        type: 'update',
        payload: {
          employees: response,
        },
      });
    },
  },
};
