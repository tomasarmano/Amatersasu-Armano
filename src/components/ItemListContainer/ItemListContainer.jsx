import './itemlistcontainer.scss'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemlc">
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer