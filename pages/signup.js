import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";

const Signup = () => {
    return (
        <Layout>
            <div className="container">
                <h2 className="text-center py-4">Sign up Page</h2>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <SignupComponent />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signup;
