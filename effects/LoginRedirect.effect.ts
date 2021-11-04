import {NextRouter, Router} from "next/router";

function useLoginRedirectEffect(loggedIn: boolean, router: NextRouter) {
  if (!loggedIn) {
    router.push({
      pathname: '/login',
    })
  }
}

export default useLoginRedirectEffect;