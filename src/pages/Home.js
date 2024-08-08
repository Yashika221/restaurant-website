import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'
import mainImage from '../images/mainImage.jpeg'
import "../styles/HomeStyles.css";
const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage:`url(${mainImage})`}}>
          <div className='headerContainer'>
            <h1>Food Website</h1>
            <p>Best Food In India</p>
            <Link to="/menu">
            <button>
              ORDER NOW!
            </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home;
