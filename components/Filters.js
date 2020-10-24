export default function Filters(props) {
	//Array para generar las opciones de paises disponibles
	const paises = hotelsData.map(x => x.country).filter((x, index) => hotelsData.map(x => x.country).indexOf(x) === index);
	const today = new Date()
	return(
	        <div className="formContainer">
	         	<input className="datefrom" type="date" value={moment(props.datefrom).format("YYYY-MM-DD")} onChange={props.handleDateFrom}></input>
				<input className="dateto" type="date" value={moment(props.dateto).format("YYYY-MM-DD")} onChange={props.handleDateTo}></input>
				<select id="country" class="" onChange={props.handleCountry}>
					<option selected>Todos los países</option>
						{paises.map(x =>
							<option>{x}</option>
						)}
				</select>
				<select id="price" class="" onChange={props.handlePrice}>
					<option value= '0' selected>Cualquier precio</option>
					<option value= '1'>$</option>
					<option value= '2'>$$</option>
					<option value= '3'>$$$</option>
					<option value= '4'>$$$$</option>
				</select>
				<select id="size" class="" onChange={props.handleSize}>
					<option value= '0' selected>Cualquier tamaño</option>
					<option value= '10'>Hotel Pequeño</option>
					<option value= "20">Hotel Mediano</option>
					<option value= "21">Hotel Grande</option>
				</select>
	         </div>		
		)
}