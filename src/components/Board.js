import React, { Component, } from 'react';
import './Board.css';
import List from './List';


export default class Board extends Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('lists')) {
      const rawLS = localStorage.getItem('lists');
      const parsedLS = JSON.parse(rawLS);
      this.state = { lists: parsedLS }
    } else {
      this.state = {
        lists: [
          {
            title: 'A fazer',
            id: 0,
            cards: [{
              taskText: 'Fazer Compras',
              listNumber: 0,
              timeId: 0
            },
            {
              taskText: 'Lavar o Carro',
              listNumber: 0,
              timeId: 1
            }]
          },
          {
            title: 'Em andamento',
            id: 1,
            cards: [{
              taskText: 'Atualizar Curriculo',
              listNumber: 1,
              timeId: 2
            },
            ]
          },
          {
            title: 'Feito',
            id: 2,
            cards: [{
              taskText: 'Cortar Cabelo',
              listNumber: 2,
              timeId: 4
            },
            {
              taskText: 'Arrumar a porta',
              listNumber: 2,
              timeId: 5
            }]
          },
        ]
      }

      localStorage.setItem('lists', JSON.stringify(this.state.lists))
    }
  }


  onDragStart = (e, fromList) => {
    console.log(`what a drag!`)
    const dragInfo = {
      taskId: e.currentTarget.id,
      fromList: fromList
    }

    localStorage.setItem('dragInfo', JSON.stringify(dragInfo));
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDrop = (e, listNum) => {

    const droppedTask = localStorage.getItem('dragInfo');
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);
    const parsedDragInfo = JSON.parse(droppedTask)


    const cardsArray = parsedLS[parsedDragInfo.fromList].cards
    const taskCard = cardsArray.find(card => card.timeId == parsedDragInfo.taskId)
    const indexOfCard = cardsArray.findIndex(card => card.timeId == parsedDragInfo.taskId)
    parsedLS[parsedDragInfo.fromList].cards.splice(indexOfCard, 1)
    parsedLS[listNum].cards.push({ ...taskCard, listNumber: parseInt(listNum) })


    this.setState({
      lists: parsedLS
    });
    localStorage.setItem('lists', JSON.stringify(parsedLS));

  }


  addTaskCard(taskText, listNumber) {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    const newTask = {
      taskText,
      listNumber,
      timeId: new Date().valueOf()
    }

    parsedLS[listNumber].cards.push(newTask)


    this.setState({
      lists: parsedLS
    })
    localStorage.setItem('lists', JSON.stringify(parsedLS))

  }


  render() {
    const lists = this.state.lists.map((list, index) => (

      <li className="list-wrapper" key={index}>

        <List {...list}
          onAdd={(taskText, listNumber) => this.addTaskCard(taskText, listNumber)}
          onDragStart={(e, fromList) => this.onDragStart(e, `${list.id}`)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={

            (e, listNum) => { this.onDrop(e, `${list.id}`) }}
        />
      </li>
    ));

    return (
      <div className="board">
        <ul className="lists">
          {lists}
        </ul>
      </div>
    );
  }
}


