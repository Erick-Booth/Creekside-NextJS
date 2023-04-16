import Menu from '../components/menu'

export default function drinks(props) {
    return (
        <Menu menuItems={ props.menuItems.drinks } dataCategory="drinks" />
    )
}
