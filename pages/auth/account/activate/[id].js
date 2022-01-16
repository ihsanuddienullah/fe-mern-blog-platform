import { useState, useEffect } from "react";
import Layout from "../../../../components/Layout";
import { signup } from "../../../../actions/auth";
import { withRouter } from "next/router";
import jwt from "jsonwebtoken";

const ActivateAccount = ({ router }) => {
    const [values, setValues] = useState({
        name: "",
        token: "",
        error: false,
        success: false,
        showButton: true,
    });

    const { name, token, error, success, showButton } = values;

    useEffect(() => {
        let token = router.query.id;
        if (token) {
            const { name } = jwt.decode(token);
            setValues({ ...values, name, token });
        }
    }, [router]);

    const clickSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false });
        signup({ token }).then((data) => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error,
                    loading: false,
                    showButton: false,
                });
            } else {
                setValues({
                    ...values,
                    loading: false,
                    success: true,
                    showButton: false,
                });
            }
        });
    };

    const showLoading = () => (loading ? <h2>Loading ... </h2> : "");

    return (
        <Layout>
            <div className="container">
                <h3 className="pb-4">Hey {name}, ready to activate your account?</h3>
                {showLoading()}
                {error && error}
                {success &&
                    "You have successfully activated your account. Please Sign in now."}
                {showButton && (
                    <button
                        className="btn btn-outline-primary"
                        onClick={clickSubmit}
                    >
                        Activate Account
                    </button>
                )}
            </div>
        </Layout>
    );
};

export default withRouter(ActivateAccount);
