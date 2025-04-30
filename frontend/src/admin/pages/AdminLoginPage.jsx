import SigninForm from "../components/AdminLoginForm";
import { TextNameProvider } from "../../context/TextNameContext";

function AdminLoginPage() {

  return (
    <>
      <div className="d-flex justify-content-center align-items-center py-5">
      <div className="w-100 col-md-11 col-lg-10 col-xl-8 px-2">

        <TextNameProvider>

          <h2 className="text-center mb-5">Admin Login</h2>
          {/* <LoginForm /> */}
          <SigninForm />

        </TextNameProvider>

      </div>
      </div>
    </>
  );
}

export default AdminLoginPage;
