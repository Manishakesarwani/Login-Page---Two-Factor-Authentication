import useCompleteAuthentication from "../hooks/useCompleteAuthentication"
import { useEmailContext } from "../hooks/useEmailContext"
import { useRequestOTP } from "../hooks/useRequestOTP"
import { useVerifyOTP } from "../hooks/useVerifyOTP"
import CreatePassword from "../page_component/CreatePassword"
import EnterPassword from "../page_component/EnterPassword"
import RequestOtp from "../page_component/RequestOtp"
import VerifyOtp from "../page_component/VerifyOtp"

const AuthenticationPage = () => {

  const {user_email} = useEmailContext();
  const  {isSuccess, error, generateOtp, generateUserOTP} = useRequestOTP();
  const {isNewUser, verifyOTPError, verifyOTP, isVerified, verifyUserViaOTP} = useVerifyOTP();
  const {authenticationError, loading, authenticationSuccess, handleAuthentication} = useCompleteAuthentication();
  return (
    <div className="main">
        <div className="container">
          <div className="box">
            <RequestOtp generateUserOTP={generateUserOTP} error={error} generateOtp={generateOtp} isSuccess={isSuccess} />
            {isSuccess && <VerifyOtp email={user_email} verifyUserViaOTP={verifyUserViaOTP} verifyOTPError={verifyOTPError} verifyOTP={verifyOTP} isVerified={isVerified} />}
            {isVerified && isNewUser && <CreatePassword email={user_email} handleAuthentication={handleAuthentication} authenticationError={authenticationError} loading={loading} authenticationSuccess={authenticationSuccess} isNewUser={isNewUser} />}
            {isVerified && !isNewUser && <EnterPassword email={user_email} handleAuthentication={handleAuthentication} authenticationError={authenticationError} loading={loading} authenticationSuccess={authenticationSuccess} isNewUser={isNewUser} />}
          </div>
            
        </div>
    </div>
  )
}

export default AuthenticationPage