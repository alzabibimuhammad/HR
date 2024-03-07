// ** Custom Icon Import
import Icon from 'src/@core/components/icon'

const UserIcon = ({ icon, ...rest }) => {
  console.log("🚀 ~ UserIcon ~ rest:", rest)
  return <Icon icon={icon} {...rest} />
}


export default UserIcon
