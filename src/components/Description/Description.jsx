export default function Description({  
  image,
  description,
  whatIs
  }) {

  return (
    <div>
      <h2>{whatIs}</h2>
      <img src={image} alt={image}/>
      <p>{description}</p>
    </div>
  )
}