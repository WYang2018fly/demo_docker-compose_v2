import { Tabs, Table } from 'antd';
const { TabPane } = Tabs;

function MyTab(props) {
  let { columnsObject, dataSourceList, callback } = props;

  return (
    <div>
      <Tabs defaultActiveKey="0" onChange={callback}>
        {
          Object.entries(columnsObject).map((array, index) => (
            <TabPane tab={array[0]} key={index.toString()}>
              <Table dataSource={dataSourceList[array[0]]} columns={array[1]} key={index.toString()} />
            </TabPane>
          ))
        }
      </Tabs>
    </div>
  );
};

export default MyTab;