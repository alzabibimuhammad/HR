// ** React Import
import { useEffect } from 'react'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import LanguageIcon from '@mui/icons-material/Language'; 

// ** Third Party Import
import { useTranslation } from 'react-i18next'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

import SyriaFlag from "../../../../../public/syria.png";


const LanguageDropdown = ({ settings, saveSettings }) => {
  // ** Hook
  const { t, i18n } = useTranslation()

  const handleLangItemClick = (lang) => {
    i18n.changeLanguage(lang)
  }

  // ** Change html `lang` attribute when changing locale
  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
  }, [i18n.language])

  return (
    <OptionsMenu
      iconButtonProps={{ color: 'inherit' }}
      icon={<Icon fontSize='1.625rem' icon='tabler:language' />}
      menuProps={{ sx: { '& .MuiMenu-paper': { mt: 4.25, minWidth: 130 } } }}
      options={[
        {
          text: `${t('English')}`,
          icon: <img src='/english.png' alt='Syria Flag' style={{ width: '30px', height: 'auto', paddingLeft:"6px" }} />,
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === 'en',
            onClick: () => {
              handleLangItemClick('en')
              saveSettings({ ...settings, direction: 'ltr' })
            },
          },
        },
        {
          text: `${t('Arabic')}`,
          icon: <img src='/syria.png' alt='Syria Flag' style={{ width: '30px', height: 'auto', paddingLeft:"6px" }} />,
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === 'ar',
            onClick: () => {
              handleLangItemClick('ar')
              saveSettings({ ...settings, direction: 'rtl' })
            },
          },
        },
      ]}
    />
  )
}

export default LanguageDropdown
