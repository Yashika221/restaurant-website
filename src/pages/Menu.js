import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { menuList } from '../data/data';

const Menu = () => {
  return (
    <Layout>
        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',bgcolor:'black',}}>
          {menuList.map(menu =>(
            <Card sx={{maxWidth:'390px',display:'flex',m:2,bgcolor:"black",color:"blanchedalmond"}}>
              <CardActionArea>
                <CardMedia sx={{minHeight:'40px'}} component={'img'} src={menu.image} alt={menu.name}/>
                <CardContent>
                  <Typography variant='h5' gutterBottom component={'div'}>
                    {menu.name}
                  </Typography>
                  <Typography variant='body2'>
                    {menu.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        )
          }
        </Box>
    </Layout>
  )
}

export default Menu;
