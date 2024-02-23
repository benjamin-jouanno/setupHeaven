import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

export function AuthGuard(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    const authenticationService = inject(AuthenticationService);
    const router = inject(Router);
    if (authenticationService.getJwtToken().token && authenticationService.getJwtToken().token != '') {
        return true;
    } else {
       return router.createUrlTree(['welcome'], { queryParams: {rediretUri: state.url}});
    }
}