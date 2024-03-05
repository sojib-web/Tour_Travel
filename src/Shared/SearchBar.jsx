import React from 'react';
import "./SearchBar.css";
import { Col, FormGroup } from 'reactstrap';

const SearchBar = () => {
    return (
        <Col>
            <div className="search__bar">
                <form className="d-flex align-items-center gap-4">
                    <FormGroup className='d-flex gap-3 form__group form__group__fast'>
                        <span><i className="ri-map-pin-fill"></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type='text' placeholder='Where are you going...?' />
                        </div>
                    </FormGroup>

                    <FormGroup className='d-flex gap-3 form__group form__group__fast'>
                        <span> <i className="ri-pin-distance-line"></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type='number' placeholder='Distance k/m...?' />
                        </div>
                    </FormGroup>

                    <FormGroup className='d-flex gap-3 form__group form__group__last'>
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Max People</h6>
                            <input type='number' placeholder='0' />
                        </div>
                    </FormGroup>
                    <span className='search__icon' type="submit">
                        <i class="ri-search-line"></i>
                    </span>
                </form>
            </div>
        </Col>
    );
}

export default SearchBar;
