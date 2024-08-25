"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex shrink-0 flex-col underline bg-neutral-700 p-4 min-w-56 min-h-screen">
      <Link className={pathname === "/" ? "text-red-600" : ""} href="/">
        Home
      </Link>
      <Link
        className={pathname === "/login" ? "text-red-600" : ""}
        href="/login"
      >
        Auth group (login)
      </Link>
      <Link
        className={pathname === "/register" ? "text-red-600" : ""}
        href="/register"
      >
        Auth group (register)
      </Link>
      <Link
        replace
        className={pathname === "/_not-private-folder" ? "text-red-600" : ""}
        href="/_not-private-folder"
      >
        _ Prefixed page
      </Link>
      <Link
        className={pathname === "/common-route" ? "text-red-600" : ""}
        href="/common-route"
      >
        Common Route
      </Link>
      <Link
        className={
          pathname === "/common-route/nested-route"
            ? "text-red-600 ml-4"
            : "ml-4"
        }
        href="/common-route/nested-route"
      >
        Nested Route
      </Link>
      <Link
        className={
          /\/common-route\/\d+$/.test(pathname) ? "text-red-600 ml-4" : "ml-4"
        }
        href={"/common-route/" + Date.now()}
      >
        Dynamic Route
      </Link>
      <Link
        className={
          /\/common-route\/\d+\/nested-route\/\d+/.test(pathname)
            ? "text-red-600 ml-8"
            : "ml-8"
        }
        href={"/common-route/" + Date.now() + "/nested-route/" + Date.now()}
      >
        Nested Dynamic Route
      </Link>
      <Link
        className={pathname === "/common-route-2" ? "text-red-600" : ""}
        href="/common-route-2"
      >
        Common Route 2
      </Link>
      <Link
        className={
          /\/common-route-2\/\d+/.test(pathname) ? "text-red-600 ml-4" : "ml-4"
        }
        href={
          "/common-route-2/" +
          Math.floor(Math.random() * 1000 + 1) +
          "/nested-route/" +
          Date.now()
        }
      >
        Catch all segments
      </Link>
      <Link
        className={pathname === "/with-parallel-route" ? "text-red-600" : ""}
        href="/with-parallel-route"
      >
        With Parallel Route
      </Link>
      <Link
        className={
          pathname === "/with-parallel-route/root-nested"
            ? "text-red-600 ml-4"
            : " ml-4"
        }
        href="/with-parallel-route/root-nested"
      >
        Root Nested
      </Link>
      <Link
        className={
          pathname === "/with-parallel-route/nested-in-parallel-1"
            ? "text-red-600 ml-4"
            : " ml-4"
        }
        href="/with-parallel-route/nested-in-parallel-1"
      >
        Nested Parallel 1
      </Link>
      <Link
        className={
          pathname === "/with-parallel-route/nested-in-parallel-2"
            ? "text-red-600 ml-4"
            : " ml-4"
        }
        href="/with-parallel-route/nested-in-parallel-2"
      >
        Nested Parallel 2
      </Link>
      <Link
        className={
          pathname === "/with-parallel-route/nested-in-parallel-3"
            ? "text-red-600 ml-4"
            : " ml-4"
        }
        href="/with-parallel-route/nested-in-parallel-3"
      >
        Nested Parallel 3
      </Link>
      <Link
        className={pathname === "/intercept-route" ? "text-red-600" : ""}
        href="/intercept-route"
      >
        Intercepted Route
      </Link>
      <Link
        className={
          pathname === "/intercept-route/route-1"
            ? "text-red-600 ml-4"
            : " ml-4"
        }
        href="/intercept-route/route-1"
      >
        Route 1
      </Link>
      <Link
        className={
          pathname === "/intercept-route/route-2"
            ? "text-red-600 ml-4"
            : " ml-4"
        }
        href="/intercept-route/route-2"
      >
        Route 2
      </Link>
      <Link
        className={
          pathname === "/intercept-route/route-3"
            ? "text-red-600 ml-4"
            : " ml-4"
        }
        href="/intercept-route/route-3"
      >
        Route 3
      </Link>
      <Link
        className={
          pathname === "/intercept-route/route-3/route-4"
            ? "text-red-600 ml-8"
            : " ml-8"
        }
        href="/intercept-route/route-3/route-4"
      >
        Route 4
      </Link>
    </div>
  );
}
