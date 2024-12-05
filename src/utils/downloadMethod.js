const downloadMethod = (cssMethod, selectedBrands, brands) => {
  let output = "";

  switch (cssMethod) {
    case "css":
      output += ":root {\n";
      selectedBrands.forEach((slug) => {
        const brand = brands.find((brand) => brand.slug === slug);
        brand.colors.forEach((color, key) => {
          output += `  --${slug}-${key}: #${color};\n`;
        });
      });
      output += "}";
      return output;

    case "scss":
      selectedBrands.forEach((slug) => {
        const brand = brands.find((brand) => brand.slug === slug);
        brand.colors.forEach((color, key) => {
          output += `$${slug}-${key}: #${color};\n`;
        });
      });
      return output;

    case "less":
      selectedBrands.forEach((slug) => {
        const brand = brands.find((brand) => brand.slug === slug);
        brand.colors.forEach((color, key) => {
          output += `@${slug}-${key}: #${color};\n`;
        });
      });
      return output;

    case "ase":
      const aseData = {
        version: "1.0",
        groups: [],
        colors: [],
      };

      selectedBrands.forEach((slug) => {
        const brand = brands.find((brand) => brand.slug === slug);
        brand.colors.forEach((color) => {
          aseData.colors.push({
            name: `${slug}-${color}`,
            model: "RGB",
            color: [
              parseInt(color.substring(0, 2), 16) / 255, // R
              parseInt(color.substring(2, 4), 16) / 255, // G
              parseInt(color.substring(4, 6), 16) / 255, // B
            ],
            type: "global",
          });
        });
      });

      output = JSON.stringify(aseData, null, 2);
      return output;

    case "stylus":
      selectedBrands.forEach((slug) => {
        const brand = brands.find((brand) => brand.slug === slug);
        brand.colors.forEach((color, key) => {
          output += `${slug}-${key} = #${color}\n`;
        });
      });
      return output;

    default:
      return output;
  }
};

export default downloadMethod;
