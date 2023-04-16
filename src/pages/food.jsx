import Menu from '../components/menu'

export default function food(props) {

    return (
        <Menu menuItems={ props.menuItems.food } dataCategory="food" />
    )
}
