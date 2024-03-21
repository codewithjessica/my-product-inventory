import Button from "@mui/material/Button";

interface NavButtonProps {
  name: string;
  link: string;
}

const NavButton = ({ name, link }: NavButtonProps) => {
  return (
    <Button
      href={link}
      key={name}
      sx={{ my: 2, color: "lightyellow", display: "block" }}
    >
      {name}
    </Button>
  );
};

export default NavButton;
