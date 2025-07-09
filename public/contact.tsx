import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    styled,
    CircularProgress,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


// Definindo tipos para os estados
interface ContactState {
    subject: string;
    message: string;
    error: string;
    loading: boolean;
}

const ContactContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    margin: 0,
    padding: 0,
    position: "relative",
    zIndex: 1,
}));

const ContactContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
    maxWidth: 400,
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    borderRadius: 10,
}));

const Contact: React.FC = () => {
    const navigate = useNavigate();
    const [state, setState] = useState<ContactState>({
        subject: "",
        message: "",
        error: "",
        loading: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!state.subject.trim() || !state.message.trim()) {
            setState((prev) => ({ ...prev, error: "Por favor, preencha todos os campos." }));
            return;
        }
        setState((prev) => ({ ...prev, loading: true, error: "" }));
        // Simulação de envio
        console.log("Email:", "leandromu84@gmail.com");
        console.log("Assunto:", state.subject);
        console.log("Mensagem:", state.message);
        setState((prev) => ({
            ...prev,
            error: "Mensagem enviada com sucesso!",
            subject: "",
            message: "",
        }));
        setTimeout(() => {
            setState((prev) => ({ ...prev, loading: false }));
            navigate("/");
        }, 2000);
    };

    const handleChange = (field: keyof ContactState) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setState((prev) => ({ ...prev, [field]: e.target.value, error: "" }));
    };

    return (

        <ContactContainer>
            <Typography variant="h4" color="white" gutterBottom>
                Contato
            </Typography>
            <ContactContent component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Seu Email"
                    type="email"
                    value="leandromu84@gmail.com"
                    disabled
                    fullWidth
                    variant="outlined"
                    InputProps={{
                        style: { color: "#676767" },
                    }}
                    aria-label="Email pré-preenchido"
                />
                <TextField
                    label="Assunto"
                    value={state.subject}
                    onChange={handleChange("subject")}
                    fullWidth
                    variant="outlined"
                    required
                    aria-label="Campo para inserir o assunto"
                    helperText="Máximo de 100 caracteres"
                />
                <TextField
                    label="Mensagem"
                    value={state.message}
                    onChange={handleChange("message")}
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                    aria-label="Campo para inserir a mensagem"
                    helperText="Máximo de 500 caracteres"
                />
                <Typography color="error" variant="body2">
                    {state.error}
                </Typography>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                    disabled={state.loading}
                >
                    {state.loading ? <CircularProgress size={24} color="inherit" /> : "Enviar"}
                </Button>
            </ContactContent>
        </ContactContainer>

    );
};

export default Contact;