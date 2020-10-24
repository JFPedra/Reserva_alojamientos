const location = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#428bca" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="11" r="3" />
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                </svg>
const size = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bed" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#428bca" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />
                <circle cx="7" cy="10" r="1" />
            </svg>
const price = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#428bca" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                    <path d="M12 6v2m0 8v2" />
              </svg>
              
const pricearray =[price, price, price, price]
export default function Hotel(props) { 

    return(
         	<div className="hotelContainer">
                <div className="hotel">
                    <img className="hotelPhoto" src={props.img} alt={props.slug}/>
                    <div className="description">
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>  
                    </div>
                    <div className="details">
                        <div className="location">
                            {location}<p>{props.city}, {props.country}</p>
                            
                        </div>
                        <footer className="sizeandprice">
                            <div className="size">                                
                                {size}<p>{props.rooms} Habitaciones</p>
                            </div>
                            <div className="price">
                                {pricearray.slice(0,`${props.price}`)}                                                       
                            </div>
                        </footer>
                    </div>
                    <button className="button">Reservar</button>
                </div>

         	</div>

    )//return end

}//Component end
