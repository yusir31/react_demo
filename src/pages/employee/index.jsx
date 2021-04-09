import { useEffect } from 'react';
import { connect } from 'dva';

function EmployeeList({ employee, dispatch }) {
  // componentDidMount
  useEffect(() => {
    dispatch({
      type: 'employee/getAll',
    });
  }, []);

  return (
    <div>
      <h1>Employee List Page</h1>
      <ul>
        {employee.map((e) => (
          <li key={e.id}>
            {e.name}{' '}
            <button
              onClick={() =>
                dispatch({
                  type: 'employee/deleteEmployee',
                  payload: {
                    id: e.id,
                  },
                })
              }
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connect(({ employee }) => ({ employee }))(EmployeeList);
