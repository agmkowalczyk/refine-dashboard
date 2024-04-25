import { UnorderedListOutlined } from '@ant-design/icons'
import { Card, List } from 'antd'
import { Text } from '../text'
import LatestActivitiesSkeleton from '../skeleton/latest-activities'

const LatestActivities = () => {
  const isLoading = false
  return (
    <Card
      headStyle={{ padding: '16px' }}
      bodyStyle={{ padding: '0 1rem' }}
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UnorderedListOutlined />
          <Text size='sm' style={{ marginLeft: '0.5rem' }}>
            Latest Activities
          </Text>
        </div>
      }
    >
      {isLoading ? (
        <List
          itemLayout='horizontal'
          dataSource={Array.from({ length: 3 }).map((_, id) => ({ id }))}
          renderItem={(_,index) => (
            <LatestActivitiesSkeleton key={index} />
          )}
        />
      ) : (
        <List />
      )}
    </Card>
  )
}

export default LatestActivities
