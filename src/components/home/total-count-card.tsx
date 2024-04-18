type Props = {
  resource: 'companies' | 'contacts' | 'deals'
  isLoading: boolean
  totalCount: number
}

const DashboardTotalCountCard = ({
  resource,
  isLoading,
  totalCount,
}: Props) => {
  return <div>DashboardTotalCountCard</div>
}

export default DashboardTotalCountCard
