const employees = [
  {
    id: '001',
    name: '张三',
  },
  {
    id: '002',
    name: '李四',
  },
];

export default {
  'GET /api/employees': (_, response) => {
    response.send(employees);
  },
};
