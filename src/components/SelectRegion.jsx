import React, { useRef } from 'react';
import "./styles/SelectRegion.css"

const SelectRegion = ({ regions, setSearch, setRegion }) => {
	const regionRef = useRef(null);

	const handleChange = () => {
		//Tomamos el valor del input
		const continente = regionRef.current.value;
		console.log(continente);
		//Y lo enviamos al componente principal
		setSearch("")
		setRegion(continente)
	}

	return (
		<div className="SelectRegion">
			<select
				id="region"
				name="region"
				ref={regionRef}
				onChange={handleChange}
			>
				<option className="option" value="">
					Filter by Region
				</option>
				{
					regions.map((region, index) => (
						!!region &&
						<option
							value={region}
							className="option"
							key={`continente_${index}`}
						>
							{region}
						</option>
					))
				}
			</select>
		</div>
	)
}

export default SelectRegion;