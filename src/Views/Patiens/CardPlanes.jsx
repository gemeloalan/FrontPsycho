
import Slider from 'react-slick';
import { Button } from "@mui/material";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ansiedad from '../../assets/ansiedaad.jpg'
import estres from '../../assets/estres.jpg'
import { useState } from 'react';
import { DetailPlan } from './DetailPlan';
const Card =({title,description,image,open,setOpen})=>{
    return(
      <div className="card" style={{ borderRadius:'20px', boxShadow:'0px 5px 5px black' }}>
      <img style={{ borderRadius:'20px', boxShadow:'0px 5px 5px black' }} src={image} alt={title} />
      <h3 style={{ textAlign:'center' }}>{title}</h3>
      <p>{description}</p>
      <Button variant='contained' onClick={()=>(setOpen(!open),console.log('first'))} >Ver mi Plan</Button>
    </div>
)}
const cards = [
  {
    title: "Ansiedad",
    description: "La ansiedad es una emoción que se caracteriza por sentimientos de tensión, pensamientos de preocupación y cambios físicos como aumento de la presión arterial.",
    image: ansiedad
  },
  {
    title: "Estres",
    description: "El estrés es una reacción fisiológica del organismo en el que entran en juego diversos mecanismos de defensa para afrontar una situación que se percibe como amenazante o de demanda incrementada.",
    image: estres
  },
  {
    title: "Depresion",
    description: "La depresión es una enfermedad mental común que afecta a millones de personas en todo el mundo. Se manifiesta con síntomas como la tristeza, la fatiga y la pérdida de interés en actividades que solían ser placenteras.",
    image: ansiedad
  },
  {
    title: "Transtorno Obsesivo Compulsivo",
    description: "El trastorno obsesivo-compulsivo (TOC) es un trastorno de ansiedad caracterizado por pensamientos intrusivos, recurrentes y molestos que provocan ansiedad, conocidos como obsesiones, y por comportamientos repetitivos y ritualizados que una persona se siente obligada a realizar, conocidos como compulsiones.",
    image: estres
  },
  {
    title: "Transtorno de Estres Postraumatico",
    description: "El trastorno de estrés postraumático (TEPT) es un trastorno mental que se puede desarrollar después de una persona haya sido testigo o haya experimentado un evento traumático, como un accidente, un desastre natural, un acto de violencia o abuso.",
    image: ansiedad
  },
  {
    title: "Transtorno de Estres Postraumatico",
    description: "El trastorno de estrés postraumático (TEPT) es un trastorno mental que se puede desarrollar después de una persona haya sido testigo o haya experimentado un evento traumático, como un accidente, un desastre natural, un acto de violencia o abuso.",
    image: estres
  },
  {
    title: "Transtorno de Estres Postraumatico",
    description: "El trastorno de estrés postraumático (TEPT) es un trastorno mental que se puede desarrollar después de una persona haya sido testigo o haya experimentado un evento traumático, como un accidente, un desastre natural, un acto de violencia o abuso.",
    image: ansiedad
  },
  {
    title: "Transtorno de Estres Postraumatico",
    description: "El trastorno de estrés postraumático (TEPT) es un trastorno mental que se puede desarrollar después de una persona haya sido testigo o haya experimentado un evento traumático, como un accidente, un desastre natural, un acto de violencia o abuso.",
    image: estres

  }
]
export default function CardPlanes() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Cantidad de cards que se muestran al mismo tiempo
    slidesToScroll: 1
  };
  const [open, setOpen] = useState(false)

  return (
    <div className="carousel-container">
    <Slider {...settings}>
        <div >
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
      
    </Slider>
    <DetailPlan open={open} handleClose={()=>setOpen(!open)}/>
  </div>
  );
}
