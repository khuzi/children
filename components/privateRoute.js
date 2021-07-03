import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const isUser = useSelector((x) => x.User);
  if (!isUser) {
    router.push("/");
    return null;
  } else {
    return children;
  }
}
