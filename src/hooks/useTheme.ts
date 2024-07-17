import { useContext } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'

const useTheme = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const theme = useContext(StyledThemeContext)
  const isDark = true
  return { isDark, toggleTheme, theme }
}

export default useTheme
