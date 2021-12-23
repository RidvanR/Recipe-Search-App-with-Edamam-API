// import style from './recipe.module.css';
import { Card, Image, CardBody, CardFooter, Paragraph, CardHeader, Anchor, Text} from 'grommet'; 


function Recipe({title, calories, image, dishtype, countrytype, time, url})  {
    	
   

    return(
       <Card margin={{top:"50px"}}>
           <CardHeader>
            <Image 
               fit="cover"
               src={image}
            />
           </CardHeader>
           <CardBody justify='around' background="neutral-4" direction="row" align='center'>
           <Anchor href={url} label={title} color="accent-4" />
           <Paragraph size="small">{time} Min</Paragraph>
           </CardBody>
           <CardFooter background="#a2423d3a" height="xxsmall">
             <Text weight="bold" size="medium" color="dark-2">{Math.floor(calories)} kcal</Text>
             <Text weight="bold" size="medium" color="dark-2">{dishtype}</Text>  
             <Text weight="bold" size="medium" color="dark-2">{countrytype}</Text>
           </CardFooter>
       </Card>
    )
}

export default Recipe