import DatesAndTitle from "./components/DatesAndTitle.js"
import Filters from "./components/Filters.js"
import Hotel from "./components/hotel.js"
import NoOptions from "./components/NoOptions.js"

const today = new Date()

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			datefrom: today,
			dateto: new Date(today.getTime() + 3456000000),
			country: "Todos los países",
			price: '0',
			size: 0,
			option: ""
		};

		this.handleDateFrom = this.handleDateFrom.bind(this);
		this.handleDateTo = this.handleDateTo.bind(this);
		this.handleCountry = this.handleCountry.bind(this);
		this.handlePrice = this.handlePrice.bind(this);
		this.handleSize = this.handleSize.bind(this);
	}
	
	handleDateFrom(e){
		e.preventDefault();
		const datefrom = moment(e.target.value, "YYYY-MM-DD");
		const option= "las fechas seleccionadas";		
		this.setState({datefrom, option});
	};
	handleDateTo(e){
		e.preventDefault();
		const dateto = moment(e.target.value, "YYYY-MM-DD");
		const option= "las fechas seleccionadas";		
		this.setState({dateto, option});
	}
	handleCountry(e){
		e.preventDefault();
		const country = e.target.value;
		const option= "el país seleccionado";
		this.setState({country, option});
	}

	handlePrice(e){
		e.preventDefault();
		const price = e.target.value;
		const option= "el precio seleccionado";
		this.setState({price, option});
	}
	handleSize(e){
		e.preventDefault();
		const size = parseInt(e.target.value);
		const option= "el tamaño seleccionado";
		this.setState({size, option});
	}


    render() {    	
		const {datefrom, dateto, country, price, size, option} = this.state;
		const hotels = hotelsData.filter(x => x.availabilityFrom <= moment(datefrom).valueOf() && x.availabilityTo >= moment(dateto).valueOf())								
								.filter(x => country != "Todos los países"? x.country === country: x)
								.filter(x => price != "0"? x.price === parseInt(price): x)
								.filter(x => size != "0"? (size > 20 ? x.rooms > 20: x.rooms <= size && x.rooms > size - 10): x);

		console.log(hotels);
		console.log(hotelsData);
         return(
         	<reactComponent>
	         	<header>
	         		<DatesAndTitle datefrom={datefrom} dateto={dateto} />
	         		<Filters 
	         			datefrom={datefrom} 
	         			dateto={dateto} 
	         			handleDateFrom={this.handleDateFrom} 
	         			handleDateTo={this.handleDateTo} 
	         			handleCountry={this.handleCountry}
	         			handlePrice={this.handlePrice}
	         			handleSize={this.handleSize}
	         		/>	
	         	</header>
	         	{hotels.length >= 1? 
	         		(<main id="mainContainer">
	         			{hotels.map(x =>
		         		<Hotel 
		         		img={x.photo}
		         		slug={x.slug}
		         		name={x.name}
		         		description={x.description}
		         		city={x.city}
		         		country={x.country}
		         		rooms={x.rooms}
		         		price={x.price}
		         		/>)}
	         		</main>):
	         		<NoOptions option={option}/>
	         	} 	
	         	
         	</reactComponent>    	
         )//fin return
    }//fin render
}//fin componente
ReactDOM.render(
	<App />,
	document.getElementById('app')
	);