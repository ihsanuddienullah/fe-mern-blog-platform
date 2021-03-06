import { useState, useEffect } from "react";
import Layout from "../../../../components/Layout";
import { resetPassword } from "../../../../actions/auth";
import { withRouter } from "next/router";

const ResetPassword = ({ router }) => {
    const [values, setValues] = useState({
        name: "",
        newPassword: "",
        error: "",
        message: "",
        showForm: true,
    });

    const { name, newPassword, error, message, showForm } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        resetPassword({ newPassword, resetPasswordLink: router.query.id }).then(
            (data) => {
                if (data.error) {
                    setValues({
                        ...values,
                        error: data.error,
                        showForm: false,
                        newPassword: "",
                    });
                } else {
                    setValues({
                        ...values,
                        message: data.message,
                        showForm: false,
                        newPassword: "",
                    });
                }
            }
        );
    };

    const showError = () =>
        error ? <div className="alert alert-danger">{error}</div> : "";

    const showMessage = () =>
        message ? <div className="alert alert-success">{message}</div> : "";

    const passwordResetForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group pt-5">
                <input
                    type="password"
                    onChange={(e) =>
                        setValues({ ...values, newPassword: e.target.value })
                    }
                    className="form-control"
                    value={newPassword}
                    placeholder="Type new password"
                    required
                />
            </div>
            <div>
                <button className="btn btn-primary">Change password</button>
            </div>
        </form>
    );

    return (
        <Layout>
            <div className="container">
                <h2>Reset password</h2>
                <hr />
                {showError()}
                {showMessage()}
                {passwordResetForm()}
            </div>
        </Layout>
    );
};

export default withRouter(ResetPassword);