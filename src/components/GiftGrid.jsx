import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GiftGrid = ({category}) => {

  const {images, isLoading} =  useFetchGifs(category);
  console.log(isLoading);
  

   return (
    <>
      <h3>{category}</h3>
      {
        isLoading && ( <h2>Cargando...</h2> )
      }
      <div className="card-grid">
        {/* Images.map */}
        {images.map((image)=>(
          <GifGridItem
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </>
  )
}
