import { DollarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { Text } from '../text'
import { useList } from '@refinedev/core'
import { Area, AreaConfig } from '@ant-design/plots'
import { DASHBOARD_DEALS_CHART_QUERY } from '@/graphql/queries'

const DealsChart = () => {
  const { data } = useList({
    resource: 'dealStages',
    meta: {
      gqlQuery: DASHBOARD_DEALS_CHART_QUERY,
    },
  })

  const config: AreaConfig = {
    data: [],
  }

  return (
    <Card
      style={{ height: '100%' }}
      headStyle={{ padding: '8px 16px' }}
      bodyStyle={{ padding: '24px 24px 0 24px' }}
      title={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <DollarOutlined />
          <Text size='sm' style={{ marginLeft: '0.5rem' }}>
            Deals
          </Text>
        </div>
      }
    >
      <Area {...config} height={325} />
    </Card>
  )
}

export default DealsChart
