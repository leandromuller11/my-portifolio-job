import { Box, Button, Container, Grid, styled, Typography } from "@mui/material"
import Me from "../../../../img/Me.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "90%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.secondary.contrastText}`
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Me} />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="lightgreen" fontSize="50px" textAlign="center" pb={2}>
                                Leandro Müller
                            </Typography>
                            <Typography color="lightgreen" fontSize="33px" textAlign="center">
                                Desenvolvedor Frond-End
                            </Typography>

                            {/* Botões com leve deslocamento à esquerda */}
                            <Box display="flex" justifyContent="center" gap={3} sx={{ ml: -4, mt: 2 }}>
                                <StyledButton>
                                    <DownloadIcon color="secondary" />
                                    <Typography color="green">Download CV</Typography>
                                </StyledButton>

                                <StyledButton>
                                    <ContactMailIcon color="secondary" />
                                    <Typography color="green">Contact</Typography>
                                </StyledButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
