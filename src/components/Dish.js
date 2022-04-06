import React from 'react';
import { useParams } from 'react-router-dom';

const Dish = (props) => {
    const listOfDishes = [
        {id:'1', dishName:"Gulabjamun"},
        {id:'2', dishName:"Rasam"},
        {id:'3', dishName:"Sambar"},
        {id:'4', dishName:"Pavbhaji"},
        {id:'5', dishName:"Gulabjamun"},
        {id:'6', dishName:"Gulabjamun"},
        {id:'7', dishName:"Gulabjamun"},
        {id:'8', dishName:"Gulabjamun"},
        {id:'9', dishName:"Gulabjamun"},
        {id:'10', dishName:"Gulabjamun"},
    ]

    let {id} = useParams();

    let userSelectedDish = listOfDishes.find(dish => {
        if(dish.id === id) {
            return true
        }
        return false
    })
    console.log(userSelectedDish)
  return (
    <>
    <h1>I am displaying {userSelectedDish.dishName} dish</h1>
    </>
  )
}

export default Dish