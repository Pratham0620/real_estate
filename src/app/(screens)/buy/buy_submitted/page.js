import { Container, Grid } from "@mui/material";
import '../../../../../public/sass/pages/buy_submit.scss';
export default function Submit(){
    return (
        <div className="submit_container">
            <Container>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="submit_parent">
                            <h3> Successfully Submitted</h3>
                            <div className="des">The owner of the property will contact you soon. You will get a confirmation email at *************iness@gmail.com </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}