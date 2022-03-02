import data from './data'; 

function App() {
  return (
    <dive class="grid-container">
    <header class="row">
        <div>
            <a class="brand" href="Index.html">GETNSETMARKET</a>
        </div>
        <div>
            <a href="cart.html">Cart  </a>
            <a href="Signin.html">SignIn</a>
        </div>
    </header>
        <main>
            <div class="row center">
              {
                data.products.map(product => (<div key={product._id} class="card">
                 <a href={`/product/${product._id}`}> 
                    <img class="medium" src={product.image} alt={product.name}/>
                </a>
                <div class="card-body">
                    <a href={`/product/${product._id}`}> 
                        <h2>{product.name}</h2>
                    </a>
                    <div class="rating">
                        <h2>Star rating</h2> 
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star-half-o"></span>
                    </div>
                    <div class="price">
                       {product.price}
                    </div>
                </div>
            
            </div> 

                ))
              }
                 
            </div>
        </main>
    <footer class="row center">
        All rights reserved 
    </footer>
</dive>

  );
}

export default App;
