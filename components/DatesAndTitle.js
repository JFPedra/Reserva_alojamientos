export default function DatesAndTitle(props) {
			//Arrays para generar las fechas
    		const meses = new Array (0,"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
			const dias = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
			const {datefrom, dateto} = props;
	return(
			<div>
	         	<h1>Hoteles</h1>
	         	<p>Desde el&nbsp;<b>{dias[moment(datefrom).format("d")]}, {moment(datefrom).format("D")} de&nbsp; 
	         	{meses[moment(datefrom).format("M")]} de {moment(datefrom).format("YYYY")} </b>
	         	hasta el <b>{dias[moment(dateto).format("d")]}, {moment(dateto).format("D")} de&nbsp; 
	         	{meses[moment(dateto).format("M")]} de {moment(dateto).format("YYYY")} </b></p>
	       	</div>
		)
}