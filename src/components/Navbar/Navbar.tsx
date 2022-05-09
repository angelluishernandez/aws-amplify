import { AppBar, Box, Toolbar, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const links = [
  {
    url: "/",
    label: "Home",
  },

  {
    url: "/create-todo",
    label: "Create todo",
  },
  {
    url: "/login",
    label: "Login",
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const handleOnClick = (url: string) => navigate(url);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack spacing={2} direction="row">
            {links.map(({ url, label }, index) => (
              <Button
                variant="contained"
                color="warning"
                key={index}
                onClick={() => handleOnClick(url)}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
