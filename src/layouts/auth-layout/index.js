// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { Button, Form, Alert } from "antd";
// import PropTypes from "prop-types";
// import {
//   signIn,
//   showLoading,
//   showAuthMessage,
//   hideAuthMessage,
// } from "redux/actions/Auth";
// import { useHistory } from "react-router-dom";
// import { motion } from "framer-motion";

// export const LoginForm = (props) => {
//   let history = useHistory();

//   const {
//     hideAuthMessage,
//     showLoading,
//     signIn,
//     token,
//     loading,
//     redirect,
//     showMessage,
//     message,
//   } = props;

//   const initialCredential = {
//     email: "burcuoksuz7@gmail.com",
//     password: "f6c4bc3-",
//   };

//   const onLogin = (values) => {
//     showLoading();
//     signIn(values);
//   };

//   useEffect(() => {
//     if (token !== null) {
//       console.log(redirect);

//       history.push("/v1");
//     }
//     if (showMessage) {
//       setTimeout(() => {
//         hideAuthMessage();
//       }, 3000);
//     }
//   });
//   const togglePassword = () => {
//     var input = document.getElementById("myPassword");
//     var icon = document.getElementById("passwordIcon");

//     if (input.type === "password") {
//       icon.classList.replace("fa-eye-slash", "fa-eye");
//       input.type = "text";
//     } else {
//       icon.classList.replace("fa-eye", "fa-eye-slash");

//       input.type = "password";
//     }
//   };
//   return (
//     <>
//       <div className="login-background">
//         <motion.div
//           className="mt-10"
//           initial={{ opacity: 0, marginTop: 0 }}
//           animate={{
//             opacity: showMessage ? 1 : 0,
//             marginBottom: showMessage ? 20 : 0,
//           }}
//         >
//           <Alert
//             type="error"
//             className="mb-5"
//             showIcon
//             message={message}
//           ></Alert>
//         </motion.div>
//         <img
//           src="/img/ortak-market-logo.png"
//           width={300}
//           alt="brand"
//           className="ml-12 opacity-80"
//         />
//         <div className="mt-10 mb-10">
//           <h3 className="opacity-40 text-white font-medium text-2xl text-center">
//             Admin Paneli
//           </h3>
//           <p className=" text-sm mt-1 opacity-60" style={{ color: "#756F80" }}>
//             Giriş bilgilerinizi doldurarak sisteme giriniz.
//           </p>
//         </div>

//         <Form
//           layout="vertical"
//           className=" mt-2"
//           style={{ width: "400px" }}
//           name="login-form"
//           initialValues={initialCredential}
//           onFinish={onLogin}
//         >
//           <Form.Item>
//             <div className="flex w-full">
//               <span className="fa text-white text-opacity-60 fa-envelope absolute left-4  pt-2 text-lg"></span>
//               <Form.Item
//                 className="relative m-0 w-full"
//                 name="email"
//                 rules={[
//                   {
//                     required: true,
//                     message: "E-Posta adresiniz yazınız!",
//                   },
//                   {
//                     type: "email",
//                     message: "Geçerli bir E-Posta adresi yazınız!",
//                   },
//                 ]}
//               >
//                 <input
//                   autoComplete="off"
//                   className="rounded-full  auth-input"
//                   placeholder="E-Posta adresi"
//                 />
//               </Form.Item>
//             </div>
//           </Form.Item>

//           <Form.Item>
//             <div className="flex w-full">
//               <span className="fa text-white text-opacity-60 fa-lock absolute left-4  pt-2 text-lg"></span>
//               <span
//                 id="passwordIcon"
//                 className="fa text-white z-10 cursor-pointer text-opacity-60 fa-eye-slash absolute right-4  pt-2 pr-2 text-lg"
//                 onClick={togglePassword}
//               ></span>
//               <Form.Item
//                 className="relative m-0 w-full"
//                 name="password"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Şifrenizi giriniz",
//                   },
//                 ]}
//               >
//                 <input
//                   id="myPassword"
//                   type="password"
//                   className="rounded-full  auth-input"
//                   placeholder="E-Posta adresi"
//                 />
//               </Form.Item>
//             </div>
//           </Form.Item>

//           <div className="flex justify-center">
//             <a
//               href="/"
//               className="  text-white text-opacity-60 mb-5 text-center hover:text-gray-600"
//             >
//               Şifremi Unuttum
//             </a>
//           </div>

//           <Form.Item>
//             <div className="flex justify-center w-full login-button">
//               <Button
//                 htmlType="submit"
//                 className="rounded-full text-white w-36  h-10 bg-yellow-500   hover:text-black  hover:bg-yellow-500  hover:border-yellow-500 focus:bg-yellow-500 focus:text-black   "
//                 loading={loading}
//                 style={{ borderColor: "#B56509" }}
//               >
//                 <span>Giriş</span>
//               </Button>
//             </div>
//           </Form.Item>
//         </Form>
//       </div>
//     </>
//   );
// };

// LoginForm.propTypes = {
//   otherSignIn: PropTypes.bool,
//   showForgetPassword: PropTypes.bool,
//   extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
// };

// LoginForm.defaultProps = {
//   otherSignIn: true,
//   showForgetPassword: false,
// };

// const mapStateToProps = ({ auth }) => {
//   const { loading, message, showMessage, token, redirect } = auth;
//   return { loading, message, showMessage, token, redirect };
// };

// const mapDispatchToProps = {
//   signIn,
//   showAuthMessage,
//   showLoading,
//   hideAuthMessage,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
import React from 'react'

const Auth = () => {
  return (
    <div>
      Auth
    </div>
  )
}

export default Auth
