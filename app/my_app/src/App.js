import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import MyTab from './components/MyTab';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      tasks: []
    };
  }

  async componentDidMount() {
    console.log(window.SVC_TRAEFIK_URL, window.SVC_BASE_URLS);
    let userResponse = await axios({
      method: 'get',
      url: `${window.SVC_TRAEFIK_URL ? window.SVC_TRAEFIK_URL : window.SVC_BASE_URLS.User}/api/users`
    });
    let tasksResponse = await axios({
      method: 'get',
      url: `${window.SVC_TRAEFIK_URL ? window.SVC_TRAEFIK_URL : window.SVC_BASE_URLS.Task}/api/tasks`
    });

    this.setState({
      users: userResponse.data,
      tasks: tasksResponse.data
    });
  }

  render() {
    return (
      <div className="App">
        <MyTab
          columnsObject={{
            User: [
              {
                title: '编号',
                dataIndex: 'code',
                key: 'code',
              },
              {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
              }
            ],
            Task: [
              {
                title: '姓名',
                dataIndex: ['user', 'name'],
                key: 'user'
              },
              {
                title: '内容',
                dataIndex: 'content',
                key: 'content'
              },
              {
                title: '是否完成',
                dataIndex: 'isFinish',
                render: (text, record) => (<span>{text ? '是' : '否'}</span>)
              }
            ]
          }}
          dataSourceList={{ User: this.state.users, Task: this.state.tasks }}
          callback={key => console.log(key)}
        />
      </div>
    );
  }
}

export default App;
