import React from 'react'
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Grow from '@material-ui/core/Grow';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import covid from '../images/covid-children.jpg'
import './home.css'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       padding: '5rem 1rem',
//       textAlign: 'center',
//     //   minHeight: window.innerHeight,
//       position: 'relative',
//     },
    // background: {
    //   position: 'absolute',
    //   top: '0',
    //   left: '0',
    //   opacity: '90%',
    //   width: '100%',
    //   height: '100%',
    //   background:`url(${AboutInfo.background})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    //   zIndex: '-999',
    // },
  //   title: {
  //     textAlign: 'center',
  //     paddingTop: '10px',
  //     paddingBottom:'20px',
  //     fontWeight: 400,
  //     fontSize: '3em',
  //     color: '#ff1493',
  //   },
  //   subtitle: {
  //   paddingBottom:'20px',
  //     width:350,
  //     fontWeight: 400,
  //     fontSize: '12px',
  //     textAlign:'left',
  //     marginLeft:50,
  //   },
  //   dot:{
  //       fontSize:'22px',
  //       fontWeight:'700',
  //   },

  //   picture: {
  //     width: '100%',
  //   },
  //   img: {
  //     marginTop: '10px',
  //     maxHeight: '20rem',
  //     maxWidth: '90%',
   
  //   },
    
    
  
  // }));
const Home = () => {
    // const classes = useStyles();
    // document.querySelector('body').addEventListener('mousemove', eyeball);
    // function eyeball(){
    //   var eye = document.querySelectorAll('.eye');
    //   eye.forEach(function (eye){
    //     let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    //     let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    //     let radian = Math.atan2( - x, - y);
    //     let rot = (radian *(180 / Math.PI)* -1) + 280;
    //     eye.style.transform = 'rotate('+ rot +'deg)';

    //   })
    // }
     


    return (
//         <div>
//         <Grid container className={classes.root}>
//                 <Grid item xs={12} md={6} className={classes.columnImg}>
//           <Typography className={classes.title} variant="h2">
           
//             Fight CoronaVirus
//           </Typography>
//           <Typography className={classes.subtitle} variant="h5">
//           Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
//          Most people who fall sick with COVID-19 will<span className={classes.dot}>...</span>
//           </Typography>
//           <Button variant="contained" className='btn'>
//              Read More
//            </Button>
//         </Grid>
//  {/* pic-sec */}
//         <Grid item xs={12} md={6} className={classes.columnImg}>
//           <Grow in timeout={3000}>
//             <picture className={classes.picture}>
//               <img className={classes.img} src={covid} alt="covid"/>
//             </picture>
//           </Grow>
//         </Grid>
//                   </Grid>
//         </div>
             <div>
               <div className='container'>
                 <h2>Do not be happy to see others in trouble</h2>
                 <div className='face'>
                      <div className='eyes'>
                        <span className='eye'></span>
                        <span className='eye'></span>
                      </div>
                 </div>
                 <div className='face'>
                      <div className='eyes'>
                        <span className='eye'></span>
                        <span className='eye'></span>
                      </div>
                 </div>
                 <div className='face'>
                      <div className='eyes'>
                        <span className='eye'></span>
                        <span className='eye'></span>
                      </div>
                 </div>
                 <h2> Lets's unit and fight together with Covid-19</h2>
               </div>
               
             </div>
            
    )
}

export default Home
