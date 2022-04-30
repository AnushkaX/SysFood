import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            {/*Top header*/}
            <div className="Announcement">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center display-none">
                            <p> 0114123 123</p>
                            <p>info@sysfood.com</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;