import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsLetterResponse } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private endPointUrl = 'urlexample';

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsLetterResponse>{
    const data = {name, email};

    return this.http.post<NewsLetterResponse>(this.endPointUrl, data);
  }
}
