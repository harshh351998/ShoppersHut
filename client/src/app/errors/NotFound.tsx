import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container component={Paper} sx={{height: 400}}>
            <Typography gutterBottom variant="h3">Oops we are not able to find</Typography>
            <Divider/>
            <Button fullWidth component={Link} to='/catalog'>Go Back to shop</Button>
        </Container>
    )
}