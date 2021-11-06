import {NextRouter, Router} from "next/router";

function loginRedirect(loggedIn: boolean, router: NextRouter) {
  if (!loggedIn) {
    console.log(router);
    router.push({
      pathname: '/login',
    })
  }
}

export default loginRedirect;