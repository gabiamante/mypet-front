import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { StorageService } from '../storage.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  constructor(public storage:StorageService){

  }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

        return next.handle(req)
                .pipe(
                    catchError(error => {
                        let errorObj = error;
                        if(errorObj.error ){

                           errorObj = errorObj.error;
                        }
                        if(!errorObj.status){
                            errorObj = JSON.parse(errorObj.error);
                        }
                       // alert("Passou");
                        console.log("errorObj");
                        console.log(errorObj);

                        switch(errorObj.status){
                          case 403:
                            this.handler403();
                            break;
                        }

                        return Observable.throw(errorObj);
                        })) as any;

            }
            handler403(){
              this.storage.setLocalUser(null);

            }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
}
