import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import img from "../png/Vector (4).png";
import img1 from "../png/Vector (5).png";
import { boxSizing } from "@material-ui/system";

function Name1() {
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
            <img src={img} />
            <img src={img1} />
          </Box>
        </Box>
      </nav>
      <Box textAlign="center" mt="128px">
        <h1>Toothpaste, reinvented</h1>
        <p>
          The only plastic-free and clean way to replace
          <br />
          the paste you've used your whole life.
        </p>
        <Button variant="outlined" color="primary">
          shop now{" "}
        </Button>
      </Box>

      {/* <Button variant="contained" color="primary">
          Disable elevation


        </Button>
        <Button variant="outlined" color="primary">
          shop now
        </Button>
        <Button variant="outlined" color="primary">
          Get started //{" "}
        </Button> */}
    </header>
  );
}
export default Name1;
