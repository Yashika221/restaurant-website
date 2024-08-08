import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{textAlign:"center",bgcolor:"black",color:"goldenrod","& h3":{
          fontWeight:"bold",
          textAlign:"center",
          mb:4,
          color:"blanchedalmond",
        },"& p":{
          fontWeight:800,
          fontSize:"2rem"
        }}}>
          <Typography variant='h3'>Visit My Restaurant</Typography>
          <p>
          The G.T. Road<br/>
          North Indian, Mughlai<br/>
          Sector 26, Chandigarh<br/>
          Open Between 8A.M. to 10P.M.
          </p>
          <Box sx={{m:3,width:"600px",ml:45,"@media (max-width:600px)":{
            width:"300px",
            ml:5,

          }}}>
            <TableContainer component={Paper}>
              <Table aria-label='Contact Table'>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{bgcolor:"black",color:"blanchedalmond",fontSize:"2rem",textAlign:"center",}}>
                      Contact Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <SupportAgentIcon sx={{color:"red",}}/>1800-0000-0000 (tollfree)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <EmailIcon sx={{color:"skyblue",}}/>urbanTadka@gmail.com 
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <PhoneInTalkIcon sx={{color:"green",}}/>1234567890
                    </TableCell>
                  </TableRow>
                  
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
    </Layout>
  )
}

export default Contact;
