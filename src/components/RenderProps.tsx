// Since we can't add lifecycle methods to a render prop, 
// we can only use it on components that don't need to alter the data they receive.


// it is also like hoc, which is used for create business logic separate 
function Component(props) {
    const data = { ... }
  
    return props.render(data)
  }

  <Component render={data => <ChildComponent data={data} />}
