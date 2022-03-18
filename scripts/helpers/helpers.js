export const tiene_dos_tipos = (type_arr) => {
  let tipo = "";
  if (type_arr.length === 1) {
    tipo = `${type_arr[0].type.name}`;
  }

  if (type_arr.length === 2) {
    tipo = `${type_arr[0].type.name} / ${type_arr[1].type.name}`;
  }

  return tipo;
};
