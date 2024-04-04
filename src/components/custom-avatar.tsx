import { getNameInitials } from '@/utilities/get-name-initials'
import { Avatar as AtndAvatar, AvatarProps } from 'antd'

type Props = AvatarProps & {
  name?: string
}

const CustomAvatar = ({ name = '', style, ...rest }: Props) => {
  return (
    <AtndAvatar
      alt={name}
      size='small'
      style={{
        backgroundColor: '#87d068',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name)}
    </AtndAvatar>
  )
}

export default CustomAvatar
