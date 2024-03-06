import React, { useRef } from 'react';
import "./SearchBar.css";
import { Col, FormGroup } from 'reactstrap';

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)



    const searchHandler = () => {
        const Location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (Location === "" || distance === "" || maxGroupSize === "") {
            return alert("All Fields are Required!");
        }
    }
    return (
        <Col>
            <div className="search__bar">
                <form className="d-flex align-items-center gap-4">
                    <FormGroup className='d-flex gap-3 form__group form__group__fast'>
                        <span><i className="ri-map-pin-fill"></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type='text' placeholder='Where are you going...?' ref={locationRef} />
                        </div>
                    </FormGroup>

                    <FormGroup className='d-flex gap-3 form__group form__group__fast'>
                        <span> <i className="ri-pin-distance-line"></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type='number' placeholder='Distance k/m...?' ref={distanceRef} />
                        </div>
                    </FormGroup>

                    <FormGroup className='d-flex gap-3 form__group form__group__last'>
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Max People</h6>
                            <input type='number' placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className='search__icon' type="submit" onClick={searchHandler}>
                        <i class="ri-search-line"></i>
                    </span>
                </form>
            </div>
        </Col>
    );
}

export default SearchBar;
