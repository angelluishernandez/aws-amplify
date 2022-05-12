import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Stack,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
const links = [
  {
    url: "/",
    label: "Home",
    requiresLogIn: true,
  },

  {
    url: "/create-todo",
    label: "Create todo",
    requiresLogIn: true,
  },
  {
    url: "/login",
    label: "Login",
    requiresLogIn: false,
  },
];

export default function Navbar({
  isLoggedIn,
  logOut,
}: {
  isLoggedIn: boolean;
  logOut: () => void;
}) {
  const navigate = useNavigate();
  const handleOnClick = (url: string) => navigate(url);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: "1" }}>
            <Stack spacing={2} direction="row">
              {links
                .filter((el) =>
                  isLoggedIn ? el.requiresLogIn : !el.requiresLogIn
                )
                .map(({ url, label, requiresLogIn }, index) => (
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
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Logout">
              <IconButton color="warning" onClick={logOut}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
