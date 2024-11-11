import Item from "./Item"

function ItemList({products}) {
  return (
    <div className='Container'>
        {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}

export default ItemList