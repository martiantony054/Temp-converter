import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Checkbox,
} from "@material-tailwind/react";
function Converter() {
  const [temp, setTemp] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);
  const [resultf, setResultf] = useState("");
  const [resultc, setResultc] = useState("");
  const contofar = () => {
    let temc = temp * 1.8 + 32;
    setResultf(temc);
    setResultc("");
  };
  const contocel = () => {
    let temr = (temp - 32) * 0.55;
    setResultc(temr);
    setResultf("");
  };
  return (
    <div>
      <Card className="w-96 mx-auto translate-y-40">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-9 grid h-28 translate-y-8 place-items-center"
        >
          <Typography variant="h3" color="white">
            Temperature Converter
          </Typography>
          {resultc ? (
            <Typography variant="h5" color="white">
              Your temperature in Celsius: {resultc}
            </Typography>
          ) : resultf ? (
            <Typography variant="h5" color="white">
              Your temperature in Fahrenheit: {resultf}
            </Typography>
          ) : (
            <Typography variant="h5" color="white">
              Enter a temperature to convert
            </Typography>
          )}
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Add temperature "
            size="lg"
            onChange={(e) => setTemp(e.target.value)}
            value={temp}
          />
          <div className="flex items-center gap-2">
            <Checkbox
              checked={isCelsius}
              onChange={() => setIsCelsius(!isCelsius)}
              label="Input temperature in Celsius"
            />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          {isCelsius ? (
            <Button
              fullWidth
              className="bg-blue-700"
              variant="gradient"
              color="blue"
              onClick={contofar}
            >
              Convert to Fahrenheit
            </Button>
          ) : (
            <Button
              fullWidth
              className="bg-blue-700"
              variant="gradient"
              color="blue"
              onClick={contocel}
            >
              Convert to Celsius
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
export default Converter;
