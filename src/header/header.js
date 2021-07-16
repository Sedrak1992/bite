import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import img from "../png/Vector (4).png";
import img1 from "../png/Vector (5).png";

function Header() {
  return (
    <header className="Rectangle">
      <nav>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" flexGrow="1" pl="20px">
            <Button color="primary">Shop</Button>
            <Button color="primary">About us</Button>
            <Button color="primary">Sustainability</Button>
          </Box>
          <Box flexGrow="1">
            <h2>Bitm</h2>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexGrow="1"
            justifyContent="flex-end"
          >
            <img src={img} alt="" />
            <img src={img1} alt="" />
          </Box>
        </Box>
      </nav>
      <Box textAlign="center" mt="128px">
        <Typography variant="h1" color="textSecondary">
          Toothpaste, reinvented
        </Typography>
        <Box mt="25px">
          <Typography variant="body1" color="textSecondary">
            The only plastic-free and clean way to replace
            <br />
            the paste you've used your whole life.
          </Typography>
        </Box>
        <Box mt="27px">
          <Button variant="outlined" color="primary">
            shop now{" "}
          </Button>
        </Box>
      </Box>
    </header>
  );
}
export default Header;
