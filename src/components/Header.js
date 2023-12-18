import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/mountain'

const Header = () => {
  return (
    <header className="header">
        <h1><Icon icon={locationIcon} /> Volcano Tracker (Powered by NASA Open API + Google Maps API.)</h1>
    </header>
  )
}

export default Header