import { AppBar, Box, Container, Grid, Toolbar, Typography, styled } from "@mui/material";
import Me from "../../../../img/Me.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

// ================= NAVBAR ==================
const NavLink = styled(Link)(({ theme }) => ({
    color: "#fff",
    textDecoration: "none",
    margin: theme.spacing(0, 2),
    fontWeight: "bond",
    fontSize: "17px",
    "&:hover": {
        color: "#90ee90",
    },
}));

const NavBar = () => (
    <AppBar
        position="absolute"
        elevation={0}
        sx={{
            backgroundColor: "#1d1d1d",
        }}
    >
        <Toolbar
            disableGutters // remove padding interno do MUI
            sx={{
                justifyContent: "center",
                minHeight: "65px !important", // reduz altura total da AppBar
            }}
        >
            <Box sx={{
                display: "flex",
                gap: 5,
            }}
            >
                <NavLink to="https://www.linkedin.com/in/leandro-jos%C3%A9-m%C3%BCller-siqueira-53334a48/">Sobre</NavLink>
                <NavLink to="https://github.com/leandromuller11">Projetos</NavLink>
                <NavLink to="https://www.linkedin.com/in/leandro-jos%C3%A9-m%C3%BCller-siqueira-53334a48/">Skills</NavLink>
            </Box>
        </Toolbar>
    </AppBar>
);



// ================= BOTÃO UNIFORME ==================
const UniformButton = styled("a")(() => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "10px 20px",
    minWidth: "150px",
    height: "40px",
    backgroundColor: "#2e7d32",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    fontWeight: 500,
    fontSize: "14px",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "& svg": {
        fontSize: "18px",
        color: "#ffffff",
    },
    "&:hover": {
        backgroundColor: "#388e3c",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
}));

// ================= HERO ==================
const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            paddingTop: "0px",
        },
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.secondary.contrastText}`,
    }));

    const StyledFooter = styled("footer")(() => ({
        backgroundColor: "#212121",
        padding: "20px 0",
        textAlign: "center",
        color: "#ffffff",
        "& a": {
            textDecoration: "none",
            color: "#ffffff",
            margin: "0 15px",
            display: "inline-flex",
            alignItems: "center",
            transition: "color 0.3s ease",
        },
        "& a:hover": {
            color: "#00ff00",
        },
        "& svg": {
            marginRight: "8px",
        },
        "& p": {
            margin: "0",
            fontSize: "14px",
        },
    }));

    return (
        <>
            {/* ✅ Navbar */}
            <NavBar />

            {/* ✅ Hero Section */}
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Box position="relative" textAlign="center">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative">
                                    <StyledImg src={Me} />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Typography
                                color="lightgreen"
                                fontSize="43px"
                                textAlign="left"
                                pb={2}
                                sx={{
                                    transition: "transform 1s ease, color 1s ease",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                        color: "#39FF14",
                                    },
                                }}
                            >
                                Leandro Müller
                            </Typography>
                            <Typography
                                color="lightgreen"
                                fontSize="30px"
                                textAlign="left"
                                pb={2}
                                sx={{
                                    transition: "transform 1s ease, color 1s ease",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                        color: "#39FF14",
                                    },
                                }}
                            >
                                Desenvolvedor Front-End
                            </Typography>

                            <Box
                                display="flex"
                                justifyContent="flex-start"
                                gap={2}
                                mt={3}
                                alignItems="center"
                            >
                                <UniformButton
                                    as="a"
                                    href="/CV-Leandro-2024.pdf"
                                    download="CV-Leandro-2024.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <DownloadIcon />
                                    <span>Download CV</span>
                                </UniformButton>

                                <UniformButton
                                    as="a"
                                    href="./public/contact.tsx"
                                >
                                    <ContactMailIcon />
                                    <span>Contact</span>
                                </UniformButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>

            {/* ✅ Footer */}
            <Container maxWidth={false} disableGutters sx={{ px: 0 }}>
                <StyledFooter>
                    <a
                        href="https://www.linkedin.com/in/leandro-jos%C3%A9-m%C3%BCller-siqueira-53334a48/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                        <p>LinkedIn</p>
                    </a>
                    <a href="https://www.instagram.com/leandromuller84/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                        <p>Instagram</p>
                    </a>
                    <a href="https://github.com/leandromuller11" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                        <p>GitHub</p>
                    </a>
                </StyledFooter>
            </Container>
        </>
    );
};
/*  */
export default Hero;
