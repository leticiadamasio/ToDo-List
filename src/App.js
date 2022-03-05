import React, {Component} from 'react'
import styled from "styled-components"

const Container = styled.div`
   height:98vh;
   background-color: #FAF0E6;
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
`
const Title = styled.h1`
   color:#DDA0DD;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
`

const Input = styled.input`
   background-color:#FFFFF;
   height:3.5vh;
   width:20vw;
`
const AddButton = styled.button`
   background-color:#D8BFD8;
   border:none;
   position:relative;
   left:1vw;
   color:white;
   width:3vw;
   height:4vh;
`
const TrashIcon = styled.img`
   width:2vw;
   height:4vh;
`
const List = styled.ul`
   width: 89.5%;
   display:flex;
   position:relative;
   justify-content:space-between;
`
export default class ToDo extends Component {
  
  state = {
    tarefa: null,
    lista: []
  }
  
  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    })

  }

  add = (event) => {
    let {lista, tarefa} = this.state
    if (tarefa.length > 0){
      this.setState({
      lista: lista.concat({
      tarefa,
      id: Date.now ()
      }),
      tarefa: ""
    })
   }
   event.preventDefault ()
  }

  remove = (id) => {
    let {lista, tarefa} = this.state
     this.setState({
       lista: lista.filter((item) =>(
         item.id != id
      ))
    })
  }
  render (){
    let {lista,tarefa} = this.state
    let {handleChange, add, remove} = this
    return (
      <Container>
       <form>
        <Title>ToDo List</Title>
        <Input value={tarefa} onChange={handleChange}/>
        <AddButton onClick={add}>ADD</AddButton>
        {lista.map((item) => (
          <List>
            <li>{item.tarefa}</li>
            <TrashIcon src="https://cdn-icons-png.flaticon.com/512/209/209290.png" alt= "trash" onClick={() => remove(item.id)}></TrashIcon>
          </List>
        ))}
     </form>
    </Container>
    )
  }
}