import React, { useRef } from 'react';

const SelectBox = ({ regions, width, search, setSearch, filterByRegion}) => {
	const regionRef = useRef(null);

	const handleChange = () => {
		//Tomamos el valor del input
		debugger
		const continente = regionRef.current.value;
		console.log(continente);
		//Y lo enviamos al componente principal
		setSearch("")
		filterByRegion(continente);
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
	)
}

export default SelectBox;