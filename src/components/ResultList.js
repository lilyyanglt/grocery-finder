import React from 'react'
import Card from './Card'

const ResultList = props => props.items.map(item => <Card key={item.id} content={item}/>)

export default ResultList;