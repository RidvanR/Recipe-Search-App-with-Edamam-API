// import style from './recipe.module.css';
import { Card, Image, CardBody, CardFooter, Paragraph, CardHeader, Anchor} from 'grommet'; 


function Recipe({title, calories, image, dishtype, countrytype, time})  {
    	
   

    return(
       <Card margin={{top:"50px"}}>
           <CardHeader>
            <Image 
               fit="cover"
               src={image}
            />
           </CardHeader>
           <CardBody justify='around' background="neutral-4" direction="row" align='center'>
           <Anchor href={'#'} label={title} color="accent-4" />
           <Paragraph size="small">{time} Min</Paragraph>
           </CardBody>
           <CardFooter background="#a2423d3a">
             <Paragraph>{Math.floor(calories)} kcal</Paragraph>
             <Paragraph>{dishtype}</Paragraph>  
             <Paragraph>{countrytype}</Paragraph>
           </CardFooter>
       </Card>
    )
}

export default Recipe