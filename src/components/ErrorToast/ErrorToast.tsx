import Snackbar from "@mui/material/Snackbar";

export default function ErrorToast({
  open,
  handleCloseClick,
  errorText,
}: {
  open: boolean;
  handleCloseClick: () => void;
  errorText: string;
}) {
  const onClose = () => handleCloseClick();

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      message={errorText}
    />
  );
}
