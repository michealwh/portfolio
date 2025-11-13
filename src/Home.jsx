import { Container, Typography, Box, Stack, Button } from "@mui/material";
import logo from './bogame.png';


function Home({ onStart }) {

    const logo = require('./bogame.png');
  return (
    <Box>
        <h1>hello</h1>
      <a href="/" className="imgtxt">
        <img src={logo} alt="" />
        <span>Text</span>
      </a>
    </Box>
  );
}

export default Home;
