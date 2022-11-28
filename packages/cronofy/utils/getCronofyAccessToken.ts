import { useEffect, useState } from "react";
import axios from "axios";
import { isBrowserEnv } from "../../../utils/is";

let cronofyAccessToken: string;
export const getCronofyAccessToken = async () => {
  if (!isBrowserEnv()) return cronofyAccessToken;

  if (!cronofyAccessToken) {
    try {
      const tokenResponse = await axios.get("/api/cronofy/token");
      cronofyAccessToken =
        (tokenResponse as any)?.data?.element_token?.token ?? null;
    } catch (e) {}
  }
  return cronofyAccessToken;
};

export const useGetCronofyAccessToken = () => {
  const [isLoadingCronofyAccessToken, setIsLoadingCronofyAccessToken] =
    useState<boolean>(true);
  useEffect(() => {
    (async () => {
      try {
        await getCronofyAccessToken();
        setIsLoadingCronofyAccessToken(false);
      } catch (e) {}
    })();
  }, []);

  return { isLoadingCronofyAccessToken, cronofyAccessToken };
};
