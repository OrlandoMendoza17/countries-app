import React, { useRef } from 'react';

const SelectBox = (props) => {

	const { regions, width } = props;
	var unique = regions.filter((region, index) => regions.indexOf(region) === index);

	const regionRef = useRef(null);

	const handleChange = (e) => {
		//Tomamos el valor del input
		var continente = regionRef.current.value;
		console.log(continente);
		//Y lo enviamos al componente principal
		props.datosFiltro(continente);
	}
	
	const populateSelect = () => {
		return unique.map((region, index) => {
			// let notNull = (region !== "" && region !== null);
			return (
				!!region && 
				<option 
					value={region}
					className="option"
					key={`continente_${index}`}
				>
					{region}
				</option>
			)
		});
	}
	
	return (
		<select 
			id="region"
			name="region" 
			ref={regionRef} 
			className="select-box" 
			onChange={handleChange} 
			style={{ width: width + "px" }} 
		>
			
			<option className="option" value="">Filter by Region</option>
			{populateSelect()}
		</select>
	)
}

export default SelectBox;