import { DollarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { Text } from '../text'
import { useList } from '@refinedev/core'
import { Area, AreaConfig } from '@ant-design/plots'
import { DASHBOARD_DEALS_CHART_QUERY } from '@/graphql/queries'
import { mapDealsData } from '@/utilities/helpers'
import { useMemo } from 'react'
import { GetFieldsFromList } from '@refinedev/nestjs-query'
import { DashboardDealsChartQuery } from '@/graphql/types'

const DealsChart = () => {
  const { data } = useList<GetFieldsFromList<DashboardDealsChartQuery>>({
    resource: 'dealStages',
    meta: {
      gqlQuery: DASHBOARD_DEALS_CHART_QUERY,
    },
  })

    const dealData = useMemo(() => {
    return mapDealsData(data?.data)
    }, [data?.data])
  
  const config: AreaConfig = {
    data: dealData,
    xField: 'timeText',
    yField: 'value',
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
