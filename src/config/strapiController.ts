// src/config/strapiController.ts

import  { strapiCaller } from "./httpClient";

export const tests = async (): Promise<any> => {
  return strapiCaller({
    uri: `/api/tests?populate=*`,
  });
};
export const aboutApicol = async (): Promise<any> => {
  return strapiCaller({
    uri: `/api/home-about-apicol?populate=*`,
  });
};
export const message= async (): Promise<any> => {
  return strapiCaller({
    uri: `/api/home-messages?populate=*`,
  });
};
export const latestNews= async (): Promise<any> => {
  return strapiCaller({
    uri: `/api/latest-news?populate=*`,
  });
};


