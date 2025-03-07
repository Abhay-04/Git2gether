

const Card = ({cardData}) => {
    
  return (
    <div  className="card glass w-96 min-h-96">
    <figure>
      <img src={cardData.photoURL} alt="car!" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{`${cardData.firstName} ${cardData.lastName}`}</h2>
      <p>{cardData.about}</p>
      <div className="card-actions ">
        <button className="btn btn-primary">Ignore</button>
        <button className="btn btn-primary">Interested</button>
      </div>
    </div>
  </div>
  )
}

export default Card