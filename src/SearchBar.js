import {useState} from "react";

function SearchBar(props){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const searchButtonPressed = () => {
        props.updateSearchParams({name: name, price: price, type: type, brand: brand})
    }

    return(
        <div className="container">
            <div className="row">
                <h2>Search For An Item</h2>
            </div>
            <div className="row ">
                <div className="col">
                    <label htmlFor="name-field">Name: </label>
                    <input id="name-field" 
                    className="form-control"
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col">
                    <label htmlFor="price-field">Max Price: </label>
                    <input id="price-field" className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className="col">
                    <label htmlFor="type-field">Type: </label>
                    <input id="type-field" className="form-control" type="text" value={type} onChange={(e) => setType(e.target.value)}></input>
                </div>
                <div className="col">
                    <label htmlFor="brand-field">Brand: </label>
                    <input id="brand-field" className="form-control" type="text" value={brand} onChange={(e) => setBrand(e.target.value)}></input>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-4" />
                    <button type="button" className=" col-4 btn btn-primary" onClick={searchButtonPressed}>Search</button>
            </div>

        </div>
    );
}

export default SearchBar;