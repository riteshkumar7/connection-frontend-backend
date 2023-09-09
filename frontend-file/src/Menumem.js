import React  from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
class Menumem extends React.Component
{

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu secondary>
        <Link to ="/home"> <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          /> </Link>
          <Link to ="/searchmem"> <Menu.Item
            name='search member '
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          /></Link>
        
        <Link to ="/show">  <Menu.Item
            name='show  all '
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          </Link>

          <Link to ="/removemem">
           <Menu.Item
            name='remove'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          </Link>

          <Link to ="/addmem">
          <Menu.Item
            name='New user'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to ="/updatemem">
          <Menu.Item
            name='update information'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          </Link>
          
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='Search member'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      )
    }
}

    export default Menumem;








