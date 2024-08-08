import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'
const About = () => {
  return (
    <Layout>
        <Box sx={{
          textAlign:"Center",
          bgcolor:"black",
          color:"goldenrod",
          "& h2":{
            fontWeight:"bold",
            fontSize:"3rem",
            color:"blanchedalmond"
          },
          "& p":{
            textAlign:"justify",
            fontSize:"1.7rem",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem",
            }
          }
        }}>
          <Typography variant='h2'>
            Welcome To My Restaurant
          </Typography>
          <br/>
          <p>
          Welcome to Urban Tadka<br/>
          Urban Tadka is your gateway to the vibrant and diverse world of Indian vegetarian cuisine. Established in [Year], we are dedicated to bringing the authentic flavors of India to [City/Location] with a modern twist.
          </p>
          <br/>
         <p>
          Our Cuisine<br/>
          At Urban Tadka, we offer a wide range of vegetarian dishes that celebrate the diversity of Indian cuisine. From the spicy curries of the south to the rich, creamy delicacies of the north, our menu features something for every palate. Signature dishes include our aromatic Paneer Tikka Masala, the hearty Dal Makhani, and the beloved Chole Bhature, each prepared with the freshest ingredients and authentic spices.
         </p>
         <br/>
          <p>
          Our Values<br/>
          We are committed to sustainability, quality, and community. We source our vegetables locally, ensuring that every dish is made with the freshest produce available. Our commitment to vegetarianism is rooted in the principles of ahimsa (non-violence), promoting health and well-being for our guests and the planet.
          </p>
          <br/>
          </Box>
    </Layout>
  )
}

export default About
