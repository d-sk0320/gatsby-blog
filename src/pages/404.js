import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import NOT_FOUND_IMG from '../../static/404.jpg'
import '../styles/404.css'


const NotFound = () => {
  return (
    <Layout>
      <Seo title='404 Not Found' description='ページが見つかりません' />
      <div className='not-found-message'>
        <h1>404 Not Found</h1>
        <Link to='/'>トップページへ</Link>
        <img src={NOT_FOUND_IMG} className='not-found-image' alt='not found' />
      </div>
    </Layout>
  )
}

export default NotFound
