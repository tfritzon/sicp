export const checkIndexBadEndWarning = indexStr => {
  const last = indexStr.slice(-1);
  if (last == "!" || last == "@") {
    console.log("WARNING, index ends with special character:\n" + indexStr);
  }
};

export const checkLongLineWarning = str => {
  const lines = str.split("\n");
  for (const line of lines) {
    if (line.length >= 75) {
      console.log(
        "WARNING, line is too long (>74 chars) and will overflow the page:\n" +
          line
      );
    }
  }
};

export const missingRequireWarning = (required) => {
  console.log("WARNING, REQUIRES not found: " + required);
};

export const missingExampleWarning = (name) => {
  console.log("WARNING, EXAMPLE not found: " + name);
};

export const repeatedNameWarning = (name) => {
  console.log("WARNING, Repeated SNIPPET name: " + name);
};
