const convertKelvinToCelsius = (
  kelvin: number | undefined,
): number | undefined => {
  if (kelvin) {
    return Math.round(kelvin - 273.15);
  }
};

export {convertKelvinToCelsius};
