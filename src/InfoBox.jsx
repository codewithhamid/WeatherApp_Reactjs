import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./WeatherApp.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({ info }) {
  // const IMG_URL="https://images.unsplash.com/photo-1611570266906-ef66ea7a8c3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let HOT_img =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let Winter_IMG =
    "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
  let Rain_img =
    "https://images.unsplash.com/photo-1509635022432-0220ac12960b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJhaW5pbmd8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="card">
      <br />
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={
            info.humidity > 82
              ? Rain_img
              : info.temp > 18
              ? HOT_img
              : Winter_IMG
          }
          title="green iguana"
        />
        <CardContent className="cardcon">
          <Typography gutterBottom variant="h2" component="div">
            {info.city}{""}
            {
              info.humidity > 80
              ? (<BeachAccessIcon/>) 
              : info.temp > 18
              ?( <WbSunnyIcon/>)
              : (<AcUnitIcon/>
              )}
          </Typography>
          <Typography variant="body1" color="text.secondary" component="span" className="text">
           <p>   Temperature ={info.temp}&deg;C  </p> 
            <p> Humidity= {info.humidity}  </p> 
            <p> The Weather is Feels Like = {info.feels}&deg;C   </p> 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
