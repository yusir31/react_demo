import { Link } from 'umi';
import styles from './index.less';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


export default function indexPage({ children }) {
    const { SubMenu } = Menu;
    // const { current } = this.state;
    return (

        <Menu mode="horizontal" className={styles.nav}>
            <Menu.Item key="mail" icon={<MailOutlined />}>
                <Link to="/">To Index</Link>
        </Menu.Item>
            <Menu.Item key="app"  icon={<AppstoreOutlined />}>
                <Link to="/employee">To EmployeeAdd</Link>
        </Menu.Item>
        
            <Menu.Item key="alipay">
                {/* <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
          </a> */}
                <Link to="/list">To List</Link>
            </Menu.Item>
        </Menu>

        // <div>
        //     <div className={styles.nav}>
        //         <ul >
        //             <li>
        //                 <Link to="/">To Index</Link>
        //             </li>
        //             <li>
        //                 <Link to="/employee">To Employee</Link>
        //             </li>
        //             <li>
        //                 <Link to="/List">To List</Link>
        //             </li>

        //         </ul>

        //     </div>
        //     {/* {children} */}
        // </div>
    );
}
