
// // import React, { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { Link, useNavigate } from "react-router-dom";
// // import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// // export default function Login() {
// //   const { login } = useAuth();
// //   const [form, setForm] = useState({ login: "", password: "" });
// //   const [err, setErr] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const navigate = useNavigate();

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     setErr("");
// //     try {
// //       await login(form);
// //       navigate("/home");
// //     } catch (e) {
// //       setErr(e?.response?.data?.message || "Login failed");
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "center", // center horizontally on mobile
// //         alignItems: "center",
// //         height: "100vh",
// //         fontFamily: "Arial, sans-serif",
// //         backgroundImage: "url('/loginbg1.jpg')",
// //         backgroundRepeat: "no-repeat",
// //         backgroundSize: "cover",
// //       }}
// //     >
// //       <form
// //         onSubmit={submit}
// //         style={{
// //           padding: "30px",
// //           background: "rgba(229, 222, 222, 0.95)",
// //           borderRadius: "12px",
// //           width: "320px",
// //           maxWidth: "90%", // responsive width
// //           boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
// //         }}
// //       >
// //         <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
// //           Sign in
// //         </h2>

// //         {/* Login Field */}
// //         <label style={{ display: "block", marginBottom: "15px", color: "#444" }}>
// //           Emp ID or Email
// //           <input
// //             value={form.login}
// //             onChange={(e) => setForm({ ...form, login: e.target.value })}
// //             required
// //             style={{
// //               width: "100%",
// //               padding: "10px",
// //               marginTop: "6px",
// //               border: "1px solid #ccc",
// //               borderRadius: "6px",
// //               outline: "none",
// //               fontSize: "14px",
// //             }}
// //           />
// //         </label>

// //         {/* Password Field with Eye Toggle */}
// //         <label style={{ display: "block", marginBottom: "15px", color: "#444" }}>
// //           Password
// //           <div style={{ position: "relative" }}>
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               value={form.password}
// //               onChange={(e) => setForm({ ...form, password: e.target.value })}
// //               required
// //               style={{
// //                 width: "100%",
// //                 padding: "10px",
// //                 marginTop: "6px",
// //                 border: "1px solid #ccc",
// //                 borderRadius: "6px",
// //                 outline: "none",
// //                 fontSize: "14px",
// //               }}
// //             />
// //             <span
// //               onClick={() => setShowPassword(!showPassword)}
// //               style={{
// //                 position: "absolute",
// //                 right: "10px",
// //                 top: "50%",
// //                 padding: "5px",
// //                 transform: "translateY(-50%)",
// //                 cursor: "pointer",
// //                 fontSize: "18px",
// //                 color: "#444",
// //               }}
// //             >
// //               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
// //             </span>
// //           </div>
// //         </label>

// //         {/* Login Button */}
// //         <button
// //           type="submit"
// //           style={{
// //             width: "100%",
// //             padding: "12px",
// //             background: "#2575fc",
// //             color: "#fff",
// //             border: "none",
// //             borderRadius: "6px",
// //             fontSize: "16px",
// //             cursor: "pointer",
// //             transition: "0.3s",
// //           }}
// //           onMouseOver={(e) => (e.target.style.background = "#1a5edb")}
// //           onMouseOut={(e) => (e.target.style.background = "#2575fc")}
// //         >
// //           Login
// //         </button>

// //         {/* Forgot Password */}
// //         <div style={{ marginTop: "12px", textAlign: "center" }}>
// //           <Link to="/forgot-password" style={{ color: "#2575fc", fontSize: "14px" }}>
// //             Forgot password?
// //           </Link>
// //         </div>

// //         {/* Error Message */}
// //         {err && (
// //           <div
// //             style={{
// //               marginTop: "15px",
// //               padding: "10px",
// //               background: "#ffdddd",
// //               color: "#d8000c",
// //               borderRadius: "6px",
// //               textAlign: "center",
// //               fontSize: "14px",
// //             }}
// //           >
// //             {err}
// //           </div>
// //         )}
// //       </form>
// //     </div>
// //   );
// // }


// // import React, { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { Link, useNavigate } from "react-router-dom";
// // import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// // export default function Login() {
// //   const { login } = useAuth();
// //   const [form, setForm] = useState({ login: "", password: "" });
// //   const [err, setErr] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const navigate = useNavigate();

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     setErr("");
// //     try {
// //       await login(form);
// //       navigate("/home");
// //     } catch (e) {
// //       setErr(e?.response?.data?.message || "Login failed");
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         height: "100vh",
// //         fontFamily: "Arial, sans-serif",
// //         backgroundImage: "url('/loginbg1.jpg')",
// //         backgroundRepeat: "no-repeat",
// //         backgroundSize: "cover",
// //       }}
// //     >
// //       <form
// //         onSubmit={submit}
// //         style={{
// //           padding: "30px",
// //           background: "rgba(229, 222, 222, 0.95)",
// //           borderRadius: "12px",
// //           width: "320px",
// //           maxWidth: "90%",
// //           boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
// //         }}
// //       >
// //         <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
// //           Sign in
// //         </h2>

// //         <label style={{ display: "block", marginBottom: "15px", color: "#444" }}>
// //           Emp ID or Email
// //           <input
// //             value={form.login}
// //             onChange={(e) => setForm({ ...form, login: e.target.value })}
// //             required
// //             style={{
// //               width: "100%",
// //               padding: "10px",
// //               marginTop: "6px",
// //               border: "1px solid #ccc",
// //               borderRadius: "6px",
// //               outline: "none",
// //               fontSize: "14px",
// //             }}
// //           />
// //         </label>

// //         <label style={{ display: "block", marginBottom: "15px", color: "#444" }}>
// //           Password
// //           <div style={{ position: "relative" }}>
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               value={form.password}
// //               onChange={(e) => setForm({ ...form, password: e.target.value })}
// //               required
// //               style={{
// //                 width: "100%",
// //                 padding: "10px",
// //                 marginTop: "6px",
// //                 border: "1px solid #ccc",
// //                 borderRadius: "6px",
// //                 outline: "none",
// //                 fontSize: "14px",
// //               }}
// //             />
// //             <span
// //               onClick={() => setShowPassword(!showPassword)}
// //               style={{
// //                 position: "absolute",
// //                 right: "10px",
// //                 top: "50%",
// //                 padding: "5px",
// //                 transform: "translateY(-50%)",
// //                 cursor: "pointer",
// //                 fontSize: "18px",
// //                 color: "#444",
// //               }}
// //             >
// //               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
// //             </span>
// //           </div>
// //         </label>

// //         <button
// //           type="submit"
// //           style={{
// //             width: "100%",
// //             padding: "12px",
// //             background: "#2575fc",
// //             color: "#fff",
// //             border: "none",
// //             borderRadius: "6px",
// //             fontSize: "16px",
// //             cursor: "pointer",
// //             transition: "0.3s",
// //           }}
// //           onMouseOver={(e) => (e.target.style.background = "#1a5edb")}
// //           onMouseOut={(e) => (e.target.style.background = "#2575fc")}
// //         >
// //           Login
// //         </button>

// //         <div style={{ marginTop: "12px", textAlign: "center" }}>
// //           <Link to="/forgot-password" style={{ color: "#2575fc", fontSize: "14px" }}>
// //             Forgot password?
// //           </Link>
// //         </div>

// //         {err && (
// //           <div
// //             style={{
// //               marginTop: "15px",
// //               padding: "10px",
// //               background: "#ffdddd",
// //               color: "#d8000c",
// //               borderRadius: "6px",
// //               textAlign: "center",
// //               fontSize: "14px",
// //             }}
// //           >
// //             {err}
// //           </div>
// //         )}
// //       </form>
// //     </div>
// //   );
// // }




// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// export default function Login() {
//   const { login } = useAuth();
//   const [form, setForm] = useState({ login: "", password: "" });
//   const [err, setErr] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setErr("");
//     try {
//       await login(form);
//       navigate("/home");
//     } catch (e) {
//       setErr(e?.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "end",
//         alignItems: "center",
//         paddingRight: "80px",
//         height: "100vh",
//         width: "100vw",
//         fontFamily: "Arial, sans-serif",
//         backgroundImage: "url('/one.jpg')",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//         backgroundSize: "cover",
//       }}
//     >
//      <form
//   onSubmit={submit}
//   onMouseEnter={() => setIsHovered(true)}
//   onMouseLeave={() => setIsHovered(false)}
//   style={{
//     padding: "40px",
//     background: "rgba(150, 119, 124, 1)",
//     borderRadius: "12px",
//     width: "350px",
//     maxWidth: "90%",
//     transition: "transform 0.5s ease, box-shadow 0.5s ease",
//     transform: isHovered ? "scale(1.05)" : "scale(1)",
//     boxShadow: isHovered
//       ? "0 12px 28px rgba(0,0,0,0.35)"
//       : "0 8px 20px rgba(0,0,0,0.2)",
//   }}
// >
//   <h2
//     style={{
//       textAlign: "center",
//       marginBottom: "25px",
//       color: "#333",
//       fontSize: "22px",
//       fontWeight: "bold",
//     }}
//   >
//     SIGN IN
//   </h2>

//   {/* Emp ID */}
//   <label
//     style={{
//       display: "block",
//       marginBottom: "15px",
//       color: "#444",
//       fontSize: "14px",
//     }}
//   >
//     EMP ID or EMAIL
//     <input
//       value={form.login}
//       onChange={(e) => setForm({ ...form, login: e.target.value })}
//       required
//       onFocus={() => setFocusedField("login")}
//       onBlur={() => setFocusedField(null)}
//       style={{
//         width: "100%",
//         padding: "10px",
//         marginTop: "6px",
//         border: "1px solid #dcd6d6ff",
//         borderRadius: "6px",
//         outline: "none",
//         fontSize: "14px",
//         transition: "all 0.3s ease",
//         borderColor: focusedField === "login" ? "#2575fc" : "#ccc",
//         boxShadow:
//           focusedField === "login"
//             ? "0 0 8px rgba(37, 117, 252, 0.6)"
//             : "none",
//       }}
//     />
//   </label>

//   {/* Password */}
//   <label
//     style={{
//       display: "block",
//       marginBottom: "15px",
//       color: "#444",
//       fontSize: "14px",
//     }}
//   >
//     PASSWORD
//     <div style={{ position: "relative" }}>
//       <input
//         type={showPassword ? "text" : "password"}
//         value={form.password}
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//         required
//         onFocus={() => setFocusedField("password")}
//         onBlur={() => setFocusedField(null)}
//         style={{
//           width: "100%",
//           padding: "10px 40px 10px 10px", // space for eye icon
//           marginTop: "6px",
//           border: "1px solid #ccc",
//           borderRadius: "6px",
//           outline: "none",
//           fontSize: "14px",
//           transition: "all 0.3s ease",
//           borderColor: focusedField === "password" ? "#2575fc" : "#ccc",
//           boxShadow:
//             focusedField === "password"
//               ? "0 0 8px rgba(37, 117, 252, 0.6)"
//               : "none",
//         }}
//       />
//       <span
//         onClick={() => setShowPassword(!showPassword)}
//         style={{
//           position: "absolute",
//           right: "10px",
//           top: "50%",
//           transform: "translateY(-50%)",
//           cursor: "pointer",
//           fontSize: "18px",
//           color: "#444",
//         }}
//       >
//         {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//       </span>
//     </div>
//   </label>

//   {/* Button */}
//   <button
//     type="submit"
//     style={{
//       width: "100%",
//       padding: "12px",
//       background: "#2575fc",
//       color: "#fff",
//       border: "none",
//       borderRadius: "6px",
//       fontSize: "16px",
//       cursor: "pointer",
//       transition: "background 0.3s ease",
//       marginTop: "10px",
//     }}
//     onMouseOver={(e) => (e.target.style.background = "#1a5edb")}
//     onMouseOut={(e) => (e.target.style.background = "#2575fc")}
//   >
//     LOGIN
//   </button>

//   {/* Forgot link */}
//   <div style={{ marginTop: "12px", textAlign: "center" }}>
//     <Link to="/forgot-password" style={{ color: "#2575fc", fontSize: "14px" }}>
//       Forgot password?
//     </Link>
//   </div>

//   {/* Error box */}
//   {err && (
//     <div
//       style={{
//         marginTop: "15px",
//         padding: "10px",
//         background: "#ffdddd",
//         color: "#d8000c",
//         borderRadius: "6px",
//         textAlign: "center",
//         fontSize: "14px",
//       }}
//     >
//       {err}
//     </div>
//   )}
// </form>

//     </div>
//   );
// }




import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiUser, FiLock } from "react-icons/fi";

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ login: "", password: "" });
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await login(form);
      navigate("/home");
    } catch (e) {
      setErr(e?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        paddingRight: "50px",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        fontFamily: "Arial, sans-serif",
        backgroundImage: "url('/one.jpg')", // use a nice abstract or office background
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundSize: "1920px 1080px",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <form
        onSubmit={submit}
        style={{
          padding: "40px",
          background: "rgba(255, 255, 255, 0.15)", // glass effect
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "16px",
          width: "360px",
          maxWidth: "90%",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          color: "#fff",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "8px",
            fontSize: "26px",
            fontWeight: "bold",
          }}
        >
          Attendance Portal
        </h1>
        <p
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "14px",
            color: "#ddd",
          }}
        >
          Sign in to manage your attendance
        </p>

        {/* Employee ID / Email */}
        <label style={{ display: "block", marginBottom: "15px" }}>
          <div style={{ position: "relative" }}>
            <FiUser
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                color: "#aaa",
              }}
            />
            <input
              type="text"
              placeholder="Employee ID / Email"
              value={form.login}
              onChange={(e) => setForm({ ...form, login: e.target.value })}
              required
              style={{
                width: "100%",
                padding: "12px 12px 12px 40px",
                border: "none",
                borderRadius: "8px",
                outline: "none",
                fontSize: "14px",
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            />
          </div>
        </label>

        {/* Password */}
        <label style={{ display: "block", marginBottom: "15px" }}>
          <div style={{ position: "relative" }}>
            <FiLock
              style={{
                position: "absolute",
                top: "50%",
                left: "12px",
                transform: "translateY(-50%)",
                color: "#aaa",
              }}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              style={{
                width: "100%",
                padding: "12px 40px 12px 40px",
                border: "none",
                borderRadius: "8px",
                outline: "none",
                fontSize: "14px",
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
              }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "18px",
                color: "#ccc",
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </label>

        {/* Login Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background:
              "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(135deg, #1a5edb 0%, #4a0e9b 100%)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)")
          }
        >
          Sign In
        </button>

        {/* Forgot Password */}
        <div style={{ marginTop: "14px", textAlign: "center" }}>
          <Link
            to="/forgot-password"
            style={{ color: "#fff", fontSize: "13px" }}
          >
            Forgot password?
          </Link>
        </div>

        {/* Error box */}
        {err && (
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              background: "rgba(255, 80, 80, 0.2)",
              color: "#ffbaba",
              borderRadius: "6px",
              textAlign: "center",
              fontSize: "13px",
            }}
          >
            {err}
          </div>
        )}
      </form>
    </div>
  );
}






