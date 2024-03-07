// ** Next Import
import Link from 'next/link'


// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Icon Import
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'
import { Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(3.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)({
  fontWeight: 700,
  lineHeight: '24px',
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
})

const LinkStyled = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    navMenuBranding: userNavMenuBranding,
    menuUnlockedIcon: userMenuUnlockedIcon
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
  const {t} = useTranslation()
  const { navCollapsed } = settings
  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 34) / 8
      }
    } else {
      return 6
    }
  }

  const TittleSection = styled(Typography)(({ theme }) => ({
  
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: 600,
   
    color:'#8090A7'
        }))

  const MenuLockedIcon = () => userMenuLockedIcon || <Icon icon='tabler:circle-dot' />
  const MenuUnlockedIcon = () => userMenuUnlockedIcon || <Icon icon='tabler:circle' />

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft() }}>
      {userNavMenuBranding ? (
        userNavMenuBranding(props)
      ) : (
        <LinkStyled href='/'>



          <Box sx={{marginLeft:"22px",width:"100%",display:"flex",alignItems:"center",gap:"5px"}}>





<img width="30px" height="30px"  src='/images/policesIcon/pageLogo/logo.svg'/>

            <TittleSection>
             {t("Code Shild")}

            </TittleSection>


          </Box>


          {/* <HeaderTitle variant='h4' sx={{ ...menuCollapsedStyles, ...(navCollapsed && !navHover ? {} : { ml: 2.5 }) }}>
            {themeConfig.templateName}
          </HeaderTitle> */}
        </LinkStyled>
      )}

     
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
