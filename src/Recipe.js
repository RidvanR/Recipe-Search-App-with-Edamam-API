import style from './recipe.module.css'
function Recipe({title, calories, ingredients, image})  {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image} alt="" className={style.image} />
            <ol>
                {ingredients.map(child => (
                    <li>{child.text}</li>
                ))}
            </ol>
            <p>{Math.round(calories)} kcal</p>
        </div>
    )
}

export default Recipe