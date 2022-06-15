import React, { Component } from 'react'
import axios from 'axios'
export default class imagesearch extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            imageName: '',
            images: []
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const keyword = this.state.imageName;
        const mykey = "ERxVYfcPm92Exd_t8znrob3LraogDuuPTksNwqq_Ew0";
        const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=${mykey}&query=${keyword}`)
        this.setState({
            images: data.results
        })
    }

    handleChange(e) {
        this.setState({
            imageName: e.target.value
        })
    }

    handleReset(e) {
        this.setState({
            imageName: '',
            images: []
        })
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Search Images</h1>
                <form className="form-inline my-2 my-lg-0 col-md-8 offset-md-4 my-2" onSubmit={this.handleSubmit} >
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        name='search'
                        id='search'
                        value={this.state.imageName}
                        onChange={this.handleChange}
                        style={{ width: '350px' }}
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onClick={this.handleSubmit}>
                        Search</button>
                    <button
                        style={{ marginLeft: '10px' }}
                        className="btn btn-outline-primary my-2 my-sm-0"
                        type="submit"
                        onClick={this.handleReset}>
                        Reset</button>
                </form>
                <div className="row" style={{ marginTop: '20px', marginLeft: '10px' }}>
                    {
                        this.state.images.map((image, index) => {
                            return (
                                <div className="col-md-3" key={index}
                                >
                                    <img
                                        src={image.urls.full}
                                        alt=""
                                        className="img-fluid"
                                        style={{ width: '100%', height: '300px' }}
                                    />
                                    <h4>{image.alt_description}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
