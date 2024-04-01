import { Avatar as AtndAvatar, AvatarProps } from 'antd'

type Props = AvatarProps & {
  name?: string
}

const CustomAvatar = ({ name = '', style, ...rest }: Props) => {
  return (
    <AtndAvatar
      alt={'John Doe'}
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
      {name}
    </AtndAvatar>
  )
}

export default CustomAvatar
