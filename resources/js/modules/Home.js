import React, { Fragment } from "react";
import { Inertia } from '@inertiajs/inertia';
import { Link,usePage } from '@inertiajs/inertia-react';
import AppLayout from "../layouts/AppLayout";

function Home() {

    const propsData = usePage().props;
    const title = propsData.title;

    return (
        <AppLayout>
            <Fragment>
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumb">
                                <span className="title-page">{title}</span>
                            </div>
                        </div>
                    </div>
                    <div className="company-form">
                        <form>
                            <div className="row">
                                <div className="col-md-6 left-side-box">
                                    <div className="company-information">
                                        <div className="row ">
                                            <div className="form-group col-md-12">
                                                <h5>Company Information</h5>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="companyName">company Name :</label>
                                                <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="companyAddress">Print Name:</label>
                                                <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="Tel.No">F.Y Beginning Form :</label>
                                                <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="Tel.No">Book Commencing Form: </label>
                                                <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="uploadimage">Upload Image</label>
                                                <div className="image-setion">
                                                    <div className="image-upload-wrap">
                                                        <input className="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
                                                        <div className="drag-text">
                                                            <h3>select Image</h3>
                                                        </div>
                                                    </div>
                                                    <div className="file-upload-content">
                                                        <div className="upload-content">
                                                            <img className="file-upload-image" src="#" alt="your image" />
                                                            <div className="image-title-wrap">
                                                                <button type="button" onclick="removeUpload()" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="company-adress-list">
                                            <div className="row ">
                                                <div className="form-group col-md-12">
                                                    <h5>Address </h5>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="companyName">Address: </label>
                                                    <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="companyAddress">IT PAN: </label>
                                                    <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="Tel.No">Tel No:</label>
                                                    <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="companyName">ward: </label>
                                                    <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="companyAddress">FAX: </label>
                                                    <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 left-side-box">
                                    <div className="company-information">
                                        <div className="row ">
                                            <div className="form-group col-md-12">
                                                <h5>Country/State Information</h5>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="companyName">company Name: </label>
                                                <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="companyAddress">State: </label>
                                                <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="Tel.No">Date Type :</label>
                                                <input type="date" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                            </div>
                                        </div>
                                        <div className="company-adress-list">
                                            <div className="row ">
                                                <div className="form-group col-md-12">
                                                    <h5>Currency Information</h5>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="companyName">currency Symbol:  </label>
                                                    <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="companyAddress">currency String:  </label>
                                                    <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="Tel.No">Currency Sub-String</label>
                                                    <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="company-adress-list">
                                            <div className="row ">
                                                <div className="form-group col-md-12">
                                                    <h5>VAT/GST Information</h5>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="companyName">Enable VAT/GST:  </label>
                                                    <input type="text" className="form-control" id="companyName" aria-describedby="emailHelp" placeholder="company Name" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="companyAddress">TIN:  </label>
                                                    <input type="text" className="form-control" id="companyAddress" placeholder="Company Address" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="Tel.No">CST No.</label>
                                                    <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="Tel.No">Default Tax Rate.1.</label>
                                                    <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label for="Tel.No">Default Tax Rate.2.</label>
                                                    <input type="text" className="form-control" id="Tel.No" aria-describedby="Tel.No" placeholder="Tel.No" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group ml-auto">
                                            <button type="submit" className="btn btn-submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <h1>Hellos</h1>
                    <Link href={base_url + '/category'}>Category</Link>
                </div>
            </Fragment>
        </AppLayout>
    )
}

export default Home