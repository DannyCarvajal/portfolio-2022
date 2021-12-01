export const keyBasedOnHour = () => new Date().getTime();

// REMOVE ALL NUMBERS AND SYMBOLS  EXPECT FROM ACCENT MARKS FROM STRINGS AND RETURN ARRAY
const removeSymbolsAndNumbers = str => {
	const regex = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g;
	return str.replace(regex, "");
};

// REPLACE MANY SPACES WITH ONE
const removeManySpaces = str => str.replace(/\s+/g, " ");
