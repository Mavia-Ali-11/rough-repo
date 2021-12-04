import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/context";
import { useHistory } from 'react-router-dom';
import { auth, updateEmail, sendEmailVerification, updatePassword, signOut, db, doc, updateDoc, setDoc, storage, ref, uploadBytes, getDownloadURL } from '../config/firebase';
import CameraIcon from '@mui/icons-material/CameraAlt';
import Sidebar from "../components/sidebar";

function Profile() {

    const { state } = useContext(GlobalContext);
    const [crrUser, handleCrrUser] = useState({});
    const [crrEmail, handleCrrEmail] = useState("");
    const [crrPassword, handleCrrPassword] = useState("");
    const [passwordVerifier1, handlePasswordVerifier1] = useState({ display: "none" });
    const [passwordVerifier2, handlePasswordVerifier2] = useState({ display: "none" });
    const [emailChanger, handleEmailChanger] = useState({ display: "none" });
    const [passwordChanger, handlePasswordChanger] = useState({ display: "none" });
    const [errMsg, handleErrMsg] = useState("");
    const [saveAvatarBtn, handleSaveAvatarBtn] = useState(true);

    const history = useHistory();

    useEffect(async () => {
        let dataFetcher = () => {
            handleCrrUser(state.authUser);
            handleCrrEmail(state.authUser.email);
            handleCrrPassword(state.authUser.password);
        }

        if (state.authUser.uid == undefined) {
            let detectData = setInterval(() => {
                if (state.authUser.uid != undefined) {
                    clearInterval(detectData);
                    dataFetcher();
                }
            }, 1000);
        } else {
            dataFetcher();
        }
    }, []);

    return (
        <div>
            <div>
                <Sidebar scrIndex="2" />
            </div>
            <div>
                <h2>Your Profile</h2>

                {
                    (() => {
                        if (crrUser.uid != undefined) {
                            return (
                                <>
                                    {/* Avatar */}

                                    <div className="user-avatar" onClick={() => {
                                        document.getElementById("imageUpload").click();
                                    }}>
                                        <img src={crrUser.avatar} id="profileImg" alt="avatar" />
                                        <div className="middle"><CameraIcon /></div>
                                    </div>

                                    <input type="file" accept='image/*' id="imageUpload" onChange={(e) => {
                                        if (e.target.files[0] != undefined) {
                                            document.getElementById("profileImg").src = URL.createObjectURL(e.target.files[0]);
                                            handleSaveAvatarBtn(false);
                                        }
                                    }} />

                                    <p>
                                        <button id="saveAvatar" disabled={saveAvatarBtn} onClick={() => {
                                            handleSaveAvatarBtn(true);
                                            let selectedImg = document.getElementById("imageUpload").files[0];
                                            let imageRef = ref(storage, `images/avatars/${crrUser.uid}`)
                                            uploadBytes(imageRef, selectedImg).then(async () => {
                                                await getDownloadURL(imageRef)
                                                    .then(async (url) => {
                                                        let dataRef = doc(db, "users", crrUser.uid);
                                                        state.authUser.avatar = url;
                                                        await setDoc(dataRef, {
                                                            avatar: url
                                                        }, { merge: true });
                                                    })
                                            });
                                        }}>Save</button>
                                    </p>

                                    {/* Username */}

                                    <p>Username: {crrUser.username}</p>

                                    {/* Email Changer */}

                                    <p>Email: {crrEmail} <button onClick={() => {
                                        handlePasswordVerifier1({ display: "block" });
                                        handlePasswordVerifier2({ display: "none" });
                                        handlePasswordChanger({ display: "none" });
                                    }}>Change email</button></p>

                                    <div id="passwordVerifier" style={passwordVerifier1}>
                                        <input type="password" id="verifyPsw" placeholder="Confirm password" />&nbsp;
                                        <button onClick={() => {
                                            if (document.getElementById("verifyPsw").value == crrPassword) {
                                                handleEmailChanger({ display: "block" });
                                                handlePasswordVerifier1({ display: "none" });
                                            } else {
                                                handleErrMsg("Password didn't match!");
                                            }
                                        }}>Submit</button>
                                    </div>

                                    <div id="emailChanger" style={emailChanger}>
                                        <input type="email" id="newEmail" placeholder="New email address" />
                                        &nbsp;
                                        <button onClick={() => {
                                            let newEmail = document.getElementById("newEmail");

                                            if (newEmail.value == crrEmail) {
                                                handleErrMsg("This is your current email. Please try different one to change!");
                                            } else if (newEmail.value == "") {
                                                handleErrMsg("Email can't be empty!");
                                            } else {
                                                updateEmail(auth.currentUser, newEmail.value)
                                                    .then(() => {
                                                        console.log("Email updated");

                                                        updateDoc(doc(db, "users", crrUser.uid), {
                                                            email: newEmail.value
                                                        });

                                                        sendEmailVerification(auth.currentUser)
                                                            .then(() => {
                                                                console.log("Email sent.");
                                                            })

                                                        handleCrrEmail(newEmail.value);
                                                        state.authUser.email = newEmail.value;
                                                        newEmail.value = "";
                                                        handleEmailChanger({ display: "none" });
                                                        handleErrMsg("");
                                                    }).catch((error) => {
                                                        handleErrMsg(error.message);
                                                    });
                                            }
                                        }}>Confirm</button>
                                    </div>

                                    {/* Password Changer */}

                                    <p>Password: <input type="password" value={crrPassword} disabled={true} />&nbsp;
                                        <button onClick={() => {
                                            handlePasswordVerifier1({ display: "none" });
                                            handlePasswordVerifier2({ display: "block" });
                                            handleEmailChanger({ display: "none" });
                                        }}>Change password?</button>
                                    </p>

                                    <div id="passwordVerifier2" style={passwordVerifier2}>
                                        <input type="password" id="verifyPsw2" placeholder="Confirm password" />&nbsp;
                                        <button onClick={() => {
                                            if (document.getElementById("verifyPsw2").value == crrPassword) {
                                                handlePasswordVerifier2({ display: "none" });
                                                handlePasswordChanger({ display: "block" });
                                            } else {
                                                handleErrMsg("Password didn't match!");
                                            }
                                        }}>Submit</button>
                                    </div>

                                    <div id="passwordChanger" style={passwordChanger}>
                                        <input type="password" id="newPassword" placeholder="New password" />&nbsp;
                                        <button onClick={async () => {
                                            let newPassword = document.getElementById("newPassword");

                                            if (newPassword.value == crrPassword) {
                                                handleErrMsg("This is your current password. Please try different one to change!");
                                            } else if (newPassword.value == "") {
                                                handleErrMsg("Passowrd can't be empty!");
                                            } else {
                                                updatePassword(auth.currentUser, newPassword.value).then(async () => {
                                                    console.log("Password updated");

                                                    await updateDoc(doc(db, "users", crrUser.uid), {
                                                        password: newPassword.value
                                                    });

                                                    handleCrrPassword(newPassword.value);
                                                    newPassword.value = "";
                                                    handlePasswordChanger({ display: "none" });

                                                    await signOut(auth).then(() => {
                                                        history.push("/");
                                                    }).catch((error) => {
                                                        console.log(error.message);
                                                    });

                                                    handleErrMsg("");
                                                })
                                                    .catch((error) => {
                                                        handleErrMsg(error.message);
                                                    });
                                            }
                                        }}>Confirm</button>
                                    </div>

                                    <h6 style={{ color: "red" }}>{errMsg}</h6>
                                </>
                            )
                        }

                        return null;
                    })()
                }
            </div>
        </div>

    )
}

export default Profile;