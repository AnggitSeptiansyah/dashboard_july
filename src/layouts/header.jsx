import PropTypes from "prop-types"

const Header = ({collapsed, setCollapsed}) => {
  return (
    <header className="relative z-10 flex h-[60px]">
        Header
    </header>
  )
}

Header.PropTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
}

export default Header
