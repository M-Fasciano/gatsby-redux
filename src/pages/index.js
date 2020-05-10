import React from 'react'
import { Link } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../actions'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <Layout>
      <SEO title='Home' />
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        {isLogged ? <h3>You are logged in</h3> : ''}
      </div>
      <Link to='/page-2/'>Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
