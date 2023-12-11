import React, { useState, useContext } from "react";
import { authenticateSignUp } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import {
  Box,
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
} from "@mui/material";

const Component = styled(Box)`
  height: 83vh;
  width: 97vh;
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;

  & > div,
  & > p,
  & > buttons {
    margin-top: 20px;
  }
`;
const Image = styled(Box)`
  background: #287460
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  width: 36%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 40px;
  margin-top: 10px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 40px;
  margin-top: 10px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
// ------------------------------------------------------------------
const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get Access to your Orders,Wishlist and Recommendation",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "SignUP with your mobile number to get started",
  },
};

const signUpInitialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  phone: "",
};
// ----------------------------------------------------------------------------
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signUp, setSignUp] = useState(signUpInitialValues);
  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  };

  const onInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    // console.log(signUp);
  };

  const signUpUser = async (e) => {
    let response = await authenticateSignUp(signUp);
    // console.log(response);
    if (!response) return;
    handleClose();
    setAccount(signUp.firstName);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Component>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: 20 }}>
                {account.subHeading}
              </Typography>
            </Image>

            {account.view === "login" ? (
              // LoginFrame
              <Wrapper>
                <TextField
                  variant="standard"
                  label="Enter Email / Mobile Number"
                />
                <TextField variant="standard" label="Enter Password" />
                <Text>
                  By continuing,you agree to FlipKart's Terms of Use and Privacy
                  Policy
                </Text>
                <LoginButton>Login</LoginButton>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={() => toggleSignup()}>
                  New to flipKart ? Create an account
                </CreateAccount>
              </Wrapper>
            ) : (
              // SignUPFrame

              <Wrapper>
                <TextField
                  variant="standard"
                  label="Enter First Name"
                  name="firstName"
                  onChange={(e) => onInputChange(e)}
                />
                <TextField
                  variant="standard"
                  label="Enter Last Name"
                  name="lastName"
                  onChange={(e) => onInputChange(e)}
                />
                <TextField
                  variant="standard"
                  label="Enter UserName"
                  name="userName"
                  onChange={(e) => onInputChange(e)}
                />
                <TextField
                  variant="standard"
                  label="Enter Email"
                  name="email"
                  onChange={(e) => onInputChange(e)}
                />
                <TextField
                  variant="standard"
                  label="Enter Password"
                  name="password"
                  onChange={(e) => onInputChange(e)}
                />
                <TextField
                  variant="standard"
                  label="Enter Phone"
                  name="phone"
                  onChange={(e) => onInputChange(e)}
                />
                <LoginButton onClick={() => signUpUser()}>Continue</LoginButton>
                <CreateAccount
                  onClick={() => toggleAccount(accountInitialValue.login)}
                >
                  Have an account ? Sign In
                </CreateAccount>
              </Wrapper>
            )}
          </Box>
        </Component>
      </Dialog>
    </>
  );
};

export default LoginDialog;
