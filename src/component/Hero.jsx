import { styled } from "@mui/material/styles";

function Hero() {
  return (
    <>
      <Container>
        <Contentsss
          className="left"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",


          }}
        >
          <h1 >
            Hey, I am <span style={{ color: "red" }}>Vikash Kumar Upadhyay</span><br /> I make software</h1>
        </Contentsss>
        <div
          className="right"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledImage src="/image/vikash.jpg" alt="Portrait of Vikash" />
        </div>
      </Container>

    </>
  );
}

export default Hero;

const StyledImage = styled("img")({
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  marginTop: "1rem",
  boxShadow: "0px 0px 10px red",
  cursor: "pointer",
  animation: "zoomInOut 3s infinite ease-in-out",

  "@keyframes zoomInOut": {
    "0%": {
      transform: "scale(1)", // Original size
    },
    "50%": {
      transform: "scale(1.05)", // Zoom in
    },
    "100%": {
      transform: "scale(1)", // Back to original size
    },
  },


});

const Container = styled('div')(({ theme }) => ({
  width: "100",
  display: "flex",
  textAlign: "center",
  height: "500px",
  justifyContent: "space-around",
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },

}));


const Contentsss = styled('div')(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",



  [theme.breakpoints.down('md')]: {
    fontSize:"9px"
  },

}));
