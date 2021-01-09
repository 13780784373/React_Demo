import React, { Component } from 'react';
import Child from './Child'

class Father extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['语文', '数学', '英语']
    }
  }
  render() { 
    return (
      <div>
        <ul>
          {
            this.state.list.map((v, k)=> {
              return (  
                <Child item={v} key={k+v} index={k} remove={this.remove}/>
              )
            })
          }
        </ul>
      </div>
    );
  }

  remove = (index) => {
    var list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
 
export default Father;