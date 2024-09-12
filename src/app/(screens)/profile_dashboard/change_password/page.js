'use client'
import Sidebar from "@/app/components/sell_sidebar";
import '../../../../../public/sass/pages/changePass.scss'
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Container, FormLabel, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import secu from '../../../../../public/images/sell/Security.png'

export default function ChangePass() {
    const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password

    // Toggle password visibility
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // Prevent default mouse down behavior
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="changepass_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <div className="changepass_parent">
                            <div className="sidebar">
                                <Sidebar />
                            </div>
                            <div className="pass_right">
                                <div className="left">

                                    <h3>
                                        Change Password
                                    </h3>
                                    <p>
                                        Please enter the email address you use when
                                        creating your account, We’ll send you the
                                        instructions to reset your password
                                    </p>
                                    <form>
                                        <div className="input_fields">
                                            <h4>Old Password</h4>
                                            <TextField
                                                id="old_password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Old Password"
                                                name="old_password"

                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {!showPassword ? (
                                                                    <VisibilityOff /> /* Icon to show password */
                                                                ) : (
                                                                    <Visibility /> /* Icon to hide password */
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                variant="standard"
                                            />
                                        </div>
                                        <div className="input_fields">
                                            <h4>New Password</h4>
                                            <TextField
                                                id="new_password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="New Password"
                                                name="new_password"

                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {!showPassword ? (
                                                                    <VisibilityOff /> /* Icon to show password */
                                                                ) : (
                                                                    <Visibility /> /* Icon to hide password */
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                variant="standard"
                                            />
                                        </div>
                                        <div className="input_fields">
                                            <h4>Confirm Password</h4>
                                            <TextField
                                                id="confirm_password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Confirm Password"
                                                name="confirm_password"

                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {!showPassword ? (
                                                                    <VisibilityOff /> /* Icon to show password */
                                                                ) : (
                                                                    <Visibility /> /* Icon to hide password */
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                variant="standard"
                                            />
                                        </div>
                                        <div className="btn_area">
                                            <Button variant="contained">Change Password</Button>
                                        </div>
                                    </form>
                                </div>
                                <div className="right">
                                    <div className="image">
                                        <Image
                                            src={secu}
                                            alt="password"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}