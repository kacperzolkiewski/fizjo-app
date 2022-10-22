export const formatAdress = (adress: string) => {
  if (adress.includes(" ul. ")) {
    const adressSplitted = adress.split(" ul. ");
    return `${adressSplitted[0]} ${adressSplitted[1]}`;
  }
  return adress;
};
