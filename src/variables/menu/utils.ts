// src/utils/dateFormatter.ts

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);

  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" }); // January, February, etc.
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
